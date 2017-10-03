var express = require('express');
var models = require('../../models');
var router = express.Router();
router.post('/add', function(req, res){
  models.Thing.create(
    {
      name: req.body.name,
      description: req.body.description
    });
    res.redirect('/thing');
});
router.get('/add', function(req,res){
  res.render('thing/add')
})

/* GET Thing listing. */
router.get('/', function(req, res, next) {
  models.Thing.findAll().then(entities =>{
    res.render('thing/index', { title: 'Relate', things: entities });
  })
});
//delete thing
router.get('/remove/:thing_id', function(req, res){
  models.Thing.destroy({
    where: {
      id: req.params.thing_id
    }
  });
  res.redirect('/thing');
})
//find Thing/Things
router.post('/search', function(req, res){
  models.Thing.findAll({
    //create logic
  })
})
//find Thing by id
router.get('/:thing_id', function(req, res){
  models.Thing.findOne({
    //create logic
  })
})

module.exports = router;

