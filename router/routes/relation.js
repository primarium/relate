var express = require('express');
var models = require('../../models');
var router = express.Router();
//create Relation or edit Relation
router.post('/create', function(req, res){
  models.Relation.findOrCreate({
    //create logic
  })
})
/* GET Relation listing. */
router.get('/', function(req, res, next) {
  models.Relation.findAll().then(entities =>{
    res.send(entities)
  })
});
//delete Relation
router.post('/delete', function(req, res){
  models.Relation.destroy({
    //create logic
  })
})
//find Relation/Relations
router.post('/search', function(req, res){
  models.Relation.findAll({
    //create logic
  })
})
//find Relation by id
router.get('/:Relation_id', function(req, res){
  models.Relation.findOne({
    //create logic
  })
})

module.exports = router;

