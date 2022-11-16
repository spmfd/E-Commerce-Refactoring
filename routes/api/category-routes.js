const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allcategoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(allcategoryData);
  } catch (err) {
    res.status(615).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const onecategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    res.status(200).json(onecategoryData);
  } catch (err) {
    res.status(628).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const createCategory = await Category.create(req.body);

    res.status(200).json(createCategory);
  } catch (err) {
    res.status(638).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(652).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    Category.destroy({ where: { id: req.params.id} });

    res.status(200).json({ message: 'Category has successfully been deleted!'});
  } catch (err) {
    res.status(663).json(err);
  }
});

module.exports = router;
