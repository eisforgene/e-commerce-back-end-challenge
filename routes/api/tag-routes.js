const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{model:Product, through: ProductTag}]
  }).then(function(data){
    console.log('Find all tags', data),
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id:req.params.id
    },
    include: [{model:Product, through: ProductTag}]
  }).then(function(data){
    console.log('Find one tag', data),
    res.json(data)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(function(data){
    console.log('New Tag', data),
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(function(data){
    console.log('Updated Tag', data),
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then(function(data){
    console.log('Deleted Tag', data),
    res.json(data)
  })
});

module.exports = router;
