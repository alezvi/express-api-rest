var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    'actors' : 'api/actors',
    'genres' : 'api/genres',
    'movies' : 'api/movies',
  })
});

module.exports = router;
