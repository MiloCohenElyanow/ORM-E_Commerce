const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const allCategory = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json({message: "all Categories found succesfully: "},allCategory)
  } catch (error){
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const aCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });

    if(!aCategory){
      res.status(404).json({message: "could not find Category with given ID"});
      return;
    } else {
      res.status(200).json({message: "Category found succesfully: "},aCategory)
    }
  

  } catch (error){
    res.status(500).json(error)
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json({message: "Category created succesfully: "},newCategory);
  } catch (error){
    restore.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    });

    if(!updateCategory) {
      res.status(404).json({message: "could not find category to update with given ID"});
    } else {
      res.status(200).json({message: "Category updated succesfully: "},updateCategory)
    }
  } catch (error){
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const rmCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!rmCategory){
      res.status(404).json({message: "could not find category to delete with given ID"});
      return;
    } else{
      res.status(200).json({message: "Category deleted succesfully: "},rmCategory)
    }
  } catch (error){
    res.status(500).json(error)
  }
});

module.exports = router;
