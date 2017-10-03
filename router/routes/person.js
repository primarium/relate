var express = require('express');
var models = require('../../models');
var router = express.Router();
//create person or edit person
router.post('/add', function(req, res){
  models.Person.create(
    {
      fName: req.body.fName,
      lName: req.body.lName,
      description: req.body.description
    }
  );
  res.redirect('/person');
})
router.get('/add', function(req,res){
  res.render('person/add')
})
/* GET person listing. */
router.get('/', function(req, res, next) {
  models.Person.findAll().then(entities =>{
    res.render('person/index', { title: 'Relate', people: entities });
  })
});
//delete person
router.get('/remove/:person_id', function(req, res){
  models.Person.destroy({
    where: {
      id: req.params.person_id
    }
  });
  res.redirect('/person');
})
//find person/persons
router.post('/search', function(req, res){
  models.Person.findAll({
    //create logic
  })
})
//find person by id
router.get('/:person_id', function(req, res){
  models.Person.findOne({
    //create logic
  })
})

module.exports = router;

