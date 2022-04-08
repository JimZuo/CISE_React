

const express = require('express');
const router = express.Router();


const Book = require('../../models/Book');

router.get('/test', (req, res) => res.send('article route testing!'));


router.get('/', (req, res) => {
  Book.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Books found' }));
});


router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlefound: 'No Book found' }));
});


router.post('/', (req, res) => {
  Book.create(req.body)
    .then(article => res.json({ msg: 'Book added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});


router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});


router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a article' }));
});

module.exports = router;