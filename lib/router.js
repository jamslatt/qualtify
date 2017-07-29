Router.configure({
    layoutTemplate: 'base',
    pageNotFound: '404'
});

// Main Routes
Router.route('/', function() {
  this.render('main');
  Router.onAfterAction(function() {
    document.title = "Qualtify"
  });
});
