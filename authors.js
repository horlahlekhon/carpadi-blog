const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');

const loadAuthors = () => {
  try {
    const fileContents = fs.readFileSync('./src/data/author.yaml', 'utf8');
    const authors = yaml.load(fileContents);
    return _.keyBy(authors, 'id');
  } catch (e) {
    console.error('Error reading YAML file:', e);
    return {};
  }
};

module.exports = {
  loadAuthors,
};