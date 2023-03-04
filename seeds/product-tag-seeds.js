const { ProductTag } = require('../models');

const productTagData = [
  {
    id: 1,
    tag_id: 1,
    product_id: 1
  },
  {
    id: 2,
    tag_id: 2,
    product_id: 1
  },
  {
    id: 3,
    tag_id: 3,
    product_id: 3
  },
  {
    id: 4,
    tag_id: 7,
    product_id: 3
  },
  {
    id: 5,
    tag_id: 2,
    product_id: 5
  },
  {
    id: 6,
    tag_id: 4,
    product_id: 5
  },
  {
    id: 7,
    tag_id: 8,
    product_id: 5
  }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
