import {Meteor} from "meteor/meteor";

import {Template} from 'meteor/templating';

import './main.html';

import {Questions} from "../collections/questions.js";

Meteor.subscribe("questions");

Template.mainContent.helpers({
  questions: function() {
    return Questions.find({});
  }
});

Template.mainContent.events({
  "click .startQuestions": function() {
    Meteor.call("startQuestions");
  },
  "click .resetDB": function() {
    Meteor.call("resetDB");
  },
  // "click #login-buttons-password": function() {
  "click h1": function() {
    var user = Meteor.user();
    if (user && user.emails) {
      Meteor.call("loggedUser");
    }
  }
});

Template.game.helpers({
  questionCounter: function() {
    return Questions.find({}).count();
  }
});
