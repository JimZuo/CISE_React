const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  published_date: {
    type: Date
  },
  publication_year: {
    type: String
  },
  DOI: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);