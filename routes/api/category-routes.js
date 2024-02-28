const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  const categories = await Category.findAll({
    include: [Product],
  })
  res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const category = await Category.findOne({
      include: [Product],
      where: {
        id: req.params.id,
      }
    })
    res.json(category)
    } catch(err) {
      res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
  try{
    const category = await Category.create(req.body)
    res.json(category)
    } catch(err) {
      res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
  try{
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.json(category)
    } catch(err) {
      res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
  try{
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.json(category)
    } catch(err) {
      res.status(500).json(err)
    }
});

module.exports = router;
