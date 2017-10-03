var express = require('express');
var models = require('../../models');
var router = express.Router();
//create Place or edit Place
router.post('/add', function(req, res){
  models.Place.create(
    {
      name: req.body.name,
      description: req.body.description,
      strAddress: req.body.strAddress,
      city: req.body.city,
      stateProv: req.body.stateProv,
      country: req.body.country
    });
    res.redirect('/place');
});
router.get('/add', function(req,res){
  res.render('place/add')
})

/* GET Place listing. */
router.get('/', function(req, res, next) {
  models.Place.findAll().then(entities =>{
    res.render('place/index', { title: 'Relate', places: entities });
  })
});
//delete Place
router.get('/remove/:place_id', function(req, res){
  models.Place.destroy({
    where: {
      id: req.params.place_id
    }
  });
  res.redirect('/place');
})
//find Place/Places
router.post('/search', function(req, res){
  models.Place.findAll({
    //create logic
  })
})
//find Note by id
router.get('/:place_id', function(req, res){
  models.Place.findOne({
    //create logic
  })
})

module.exports = router;

