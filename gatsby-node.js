/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { loadAuthors } = require("./authors")

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)
const categoryPost = path.resolve("./src/templates/category.js")
const authorPosts = path.resolve("./src/templates/author-posts.js")
const tagPosts = path.resolve("./src/templates/tag-posts.js")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
            author {
              name
            }
          }
          frontmatter {
            category
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          slug: post.fields.slug,
          title: post.frontmatter.title,
          category: post.frontmatter.category,
          previousPostId,
          nextPostId,
        },
      })
    })
  }


  //this is for category template
  posts.forEach((post, index) => {
    const categoryPostsPerPage = 6
    const numberOfCategoryPosts = post.frontmatter.category.length
    const numberOfPages = Math.ceil(
      numberOfCategoryPosts / categoryPostsPerPage
    )

    for (let pageIndex = 0; pageIndex < numberOfPages; pageIndex++) {
      const pageNumber = pageIndex + 1
      const path =
        pageIndex === 0
          ? `/category/${post.frontmatter.category}`
          : `/category/${post.frontmatter.category}/${pageNumber}`
      const skip = pageIndex * categoryPostsPerPage

      function getNextPageLink() {
        if (pageNumber < numberOfPages) {
          return `/category/${post.frontmatter.category}/${pageNumber + 1}`
        }

        return null
      }

      function getPreviousPageLink() {
        if (!pageIndex) return null

        if (pageIndex === 1) return `/category/${post.frontmatter.category}`
        //else
        return `/category/${post.frontmatter.category}/${pageIndex}`
      }

      createPage({
        path,
        component: categoryPost,
        context: {
          limit: categoryPostsPerPage,
          skip,
          category: post.frontmatter.category,
          next: getNextPageLink(),
          prev: getPreviousPageLink(),
          totalPage: numberOfPages,
          currentPage: pageNumber,
        },
      })
    }
  })




  //this is for author post template
  posts.forEach((post, index) => {
    const authorName = (post.fields.author.name).toLowerCase().replace(" ", "-");
    const authorPostsPerPage = 6
    const numberOfAuthorPosts = post.fields.author.name.length
    const numberOfPages = Math.ceil(
      numberOfAuthorPosts / authorPostsPerPage
    )

    for (let pageIndex = 0; pageIndex < numberOfPages; pageIndex++) {
      const pageNumber = pageIndex + 1
      const path =
        pageIndex === 0
          ? `/author/${authorName}`
          : `/author/${authorName}/${pageNumber}`
      const skip = pageIndex * authorPostsPerPage

      function getNextPageLink() {
        if (pageNumber < numberOfPages) {
          return `/author/${authorName}/${pageNumber + 1}`
        }

        return null
      }

      function getPreviousPageLink() {
        if (!pageIndex) return null

        if (pageIndex === 1) return `/author/${authorName}`
        //else
        return `/author/${authorName}/${pageIndex}`
      }

      createPage({
        path,
        component: authorPosts,
        context: {
          limit: authorPostsPerPage,
          skip,
          authorName: post.fields.author.name,
          next: getNextPageLink(),
          prev: getPreviousPageLink(),
          totalPage: numberOfPages,
          currentPage: pageNumber,
        },
      })
    }
  })

  const postsByTag = {}  


  //this is for tag post template
  posts.forEach((post, index) => {
   
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = {
            count: 0,
            posts: [],
          };
        }

        postsByTag[tag].count++;
        postsByTag[tag].posts.push(post);
      });
    }

    const tagCounts = {};

    Object.keys(postsByTag).forEach(tagName => {
      if (!tagCounts[tagName]) {
        tagCounts[tagName] = 0;
      }
    
      tagCounts[tagName] += postsByTag[tagName].count;
    });

    Object.keys(tagCounts).forEach(tagName  => {
      const totalCount = tagCounts[tagName];
      const tagPostsPerPage = 6
      const numberOfTagPosts = totalCount;

      const numberOfPages = Math.ceil(
        numberOfTagPosts / tagPostsPerPage
      )
  
      for (let pageIndex = 0; pageIndex < numberOfPages; pageIndex++) {
        const pageNumber = pageIndex + 1
        const path =
          pageIndex === 0
            ? `/tag/${tagName}`
            : `/tag/${tagName}/page/${pageNumber}`
        const skip = pageIndex * tagPostsPerPage;
  
        
        function getNextPageLink() {
          if (pageNumber < numberOfPages) {
            return `/tag/${tagName}/page/${pageNumber + 1}`
          }
  
          return null
        }
  
        function getPreviousPageLink() {
          if (!pageIndex) return null
  
          if (pageIndex === 1) return `/tag/${tagName}`
          //else
          return `/tag/${tagName}/page/${pageIndex}`
        }
  
        createPage({
          path,
          component: tagPosts,
          context: {
            limit: tagPostsPerPage,
            skip,
            tag: tagName,
            next: getNextPageLink(),
            prev: getPreviousPageLink(),
            totalPage: numberOfPages,
            currentPage: pageNumber,
          },
        })
      }

    })
   
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const { author } = node.frontmatter
    const authors = loadAuthors()
    const authorData = authors[author]
    

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    if (authorData) {
      createNodeField({
        node,
        name: "author",
        value: authorData,
      })
    }
  }

  

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    

    createNodeField({
      name: `slug`,
      node,
      value,
    })

  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
      description: String
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      author: Author
    }


    type Author {
      id: String
      name: String
      job: String
      bio: String
      expertise: String
      ig: String
      twitter: String
      site: String

    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    
    type Fields {
      slug: String
    }
  `)
}
