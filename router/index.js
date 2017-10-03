module.exports = function (app) {
    app.use('/person', require('./routes/person'));
    app.use('/place', require('./routes/place'));
    app.use('/note', require('./routes/note'));
    app.use('/thing', require('./routes/thing'));
    app.use('/', require('./routes/index'));
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
  
  // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {}; 
        // render the error page
        res.status(err.status || 500);
        res.render('error');
  });

}