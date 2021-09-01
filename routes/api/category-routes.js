const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then(function(data){
    console.log('All Categories', data),
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id:req.params.id
    },
    include: [Product]
  }).then(function(data){
    console.log('One Category', data),
    res.json(data)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(function(data){
    console.log('New Category', data),
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(function(data){
    console.log('Updated Category', data),
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(function(data){
    console.log('Deleted Category', data),
    res.json(data)
  })
});

module.exports = router;
