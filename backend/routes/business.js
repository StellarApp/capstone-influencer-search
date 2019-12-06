const express = require('express');
const router = express.Router();
const { Business, Collection } = require("../data").models;

router.use(express.json());

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Business.findByPk(id)
    .then(bussiness => res.send(bussiness))
    .catch(next);
});

router.get("/:id/collections/", (req, res, next) => {
  const { id } = req.params;
  Collection.findByBusinessId(id)
    .then(collections => {
      res.send(collections);
    })
    .catch(next);
});

// delete a collection item
router.delete('/:collectionId', (req, res, next) => {
  const { collectionId } = req.params;
  Collection.findByPK(collectionId)
    .then(collectionItem => collectionItem.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
