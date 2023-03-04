const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      indlude: [{ model: Product }]
    });
    res.status(200).json({message: "All tags found succesfully: " ,allTags})

  } catch (error){
    res.status(500).json(error);
  };
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const aTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });

    if(!aTag){
      res.status(404).json({message: "could not find tag with given ID"});
      return;
    } else {
      res.status(200).json({message: "Tag found succesfully: " ,aTag})
    }

  } catch (error) {
    res.status(500).json(error)
  }
});


router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json({message: "Tag created succesfully: " ,newTag})

  } catch (error){
    res.status(400).json(error)
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tag_name
    }, 
    {
       where: { id: req.params.id}
    })

    if(!updateTag) {
      res.status(404).json({message: "could not find tag to update with given ID"});
      return;
    }else {
      res.status(200).json({message: "Tag updated succesfully: ",updateTag});
    }

  } catch (error){
    res.status(500).json(error)
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const rmTag = await Tag.destroy({where: {id: req.params.id}});

    if(!rmTag){
      res.status(404).json({message: "could not find tag to delete with given ID"});
      return;

    } else{
      res.status(200).json({message: "Tag deleted succesfully: ",rmTag});
    }

  } catch (error){
    res.status(500).json(error)
  }
});

module.exports = router;
