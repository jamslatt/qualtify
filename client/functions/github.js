Template.base.events({
  'click .login': function () {
     Meteor.loginWithGithub();
  },
  'click .logout': function () {
    Meteor.logout();
  }
})
