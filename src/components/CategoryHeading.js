import React from "react"
import "../styles/category_heading.css"
import { Link } from "gatsby"

const CategoryHeading = ({category}) => {

  const capitalizeHeading = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="cat_header_ctn">
      <Link to={`/category/${category}`} className="title">
        {capitalizeHeading}
      </Link>

      <Link to={`/category/${category}`} className="view-more">
        View more
      </Link>
    </div>
  )
}

export default CategoryHeading
