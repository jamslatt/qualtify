import SimpleSchema from 'simpl-schema';


posts = new Mongo.Collection('posts');

posts.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

PostSchema = new SimpleSchema({
    "message": {
        type: String,
        label: "Message"
    },
    "author": {
        type: String,
        label: "Author",
        defaultValue: function () {
          return Meteor.userId();
        }
    },
    "date": {
        type: String,
        defaultValue: function () {
          return new Date();
        }
    }
});


posts.attachSchema( PostSchema );
