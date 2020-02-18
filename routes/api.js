var express = require('express');
var router = express.Router();
var db = require('../database/models')

router.get('/movies', function(req, res, next) {
    db.movie
        .findAll()
        .then(data => res.json(data))
});

router.get('/movies/:id', function(req, res, next) {
    db.movie
        .findByPk(req.params.id)
        .then(data => {
            if (data) {
                return res.json(data)
            }

            return res.status(404).end('Not found')
        })
});

router.post('/movies', function(req, res, next) {
    db.movie
        .create(req.body)
        .then(data => {
            res.status(201).json({url: `/api/movies/${data.id}`})
        })
        .catch(err => res.status(422).end(err.message))
});

router.put('/movies/:id', function(req, res, next) {
    db.movie.update(req.body, {
        where: {id: req.params.id}
    })
    .then(data => res.status(200).end(''))
    .catch(err => res.status(422).end(err.message))
});

router.delete('/movies/:id', function(req, res, next) {
    db.movie.destroy({where: {id: req.params.id}})
        .then(data => res.status(200).end(''))
        .catch(err => res.status(422).end(err.message))
});

module.exports = router;
