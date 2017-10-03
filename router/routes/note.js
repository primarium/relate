var express = require('express');
var models = require('../../models');
var router = express.Router();
//create Note or edit Note
router.post('/add', function(req, res){
  models.Note.create(
    {
      title: req.body.title,
      content: req.body.content
    });
    res.redirect('/note');
});
router.get('/add', function(req,res){
  res.render('note/add')
})

/* GET Note listing. */
router.get('/', function(req, res, next) {
  models.Note.findAll().then(entities =>{
    res.render('note/index', { title: 'Relate', notes: entities });
  })
});
//delete Place
router.get('/remove/:note_id', function(req, res){
  models.Note.destroy({
    where: {
      id: req.params.note_id
    }
  });
  res.redirect('/note');
})
//find Note/Notes
router.post('/search', function(req, res){
  models.Note.findAll({
    //create logic
  })
})
//find Note by id
router.get('/:Note_id', function(req, res){
  models.Person.findOne({
    //create logic
  })
})

module.exports = router;

