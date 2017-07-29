Template.base.helpers({
  username: function () {
    return Meteor.user().services.github.username;
  }
})

Template.main.helpers({
  avatar : function () {
    id =  Meteor.user().services.github.id;
    return id;
    //return Meteor.user().services.github.id;
  }
})
