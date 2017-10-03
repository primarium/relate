var express = require('express');
var models = require('../../models');
var router = express.Router();
//create happening or edit happening
router.post('/create', function(req, res){
  models.Happening.findOrCreate({
    //create logic
  })
})
/* GET happening listing. */
router.get('/', function(req, res, next) {
  models.Happening.findAll().then(entities =>{
    res.send(entities)
  })
});
//delete happening
router.post('/delete', function(req, res){
  models.Happening.destroy({
    //create logic
  })
})
//find happening/happenings
router.post('/search', function(req, res){
  models.Happening.findAll({
    //create logic
  })
})
//find happening by id
router.get('/:happening_id', function(req, res){
  models.Happening.findOne({
    //create logic
  })
})

module.exports = router;

