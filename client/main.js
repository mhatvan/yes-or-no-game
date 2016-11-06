import {Meteor} from "meteor/meteor";
import {Session} from "meteor/session";

import {Template} from 'meteor/templating';

import './main.html';

import {Questions} from "../collections/questions.js";

Meteor.subscribe("questions");

Session.setDefault("questionNumber", 1);

Meteor.startup(function() {
  Meteor.call("resetDB");
});

var yesCounter = 0;
var noCounter = 0;
var totalCounter = 0;

Template.main.helpers({
  findQuestions: function() {
    return Questions.find({questionNumber: Session.get('questionNumber')});
  }
});

Template.main.events({
  "click .startQuestions": function() {
    Meteor.call("startQuestions");
  },
  "click .totalCounter": function() {
    totalCounter += 1;
    var currentQuestionNumber = Session.get("questionNumber");
    Session.set("questionNumber", currentQuestionNumber + 1);
    if (totalCounter === 5){
      Session.set("questionNumber", 1);
      // Questions.insert({questionNumber: Session.get('questionNumber')});
      Meteor.call("startQuestions");
    }
    if (currentQuestionNumber > 5) {

      // Session.set("questionNumber", 1);
    } else {
      // Meteor.call("resetDB");
      // Session.set("questionNumber", 5);
    }
  },
  "click .yesCounter": function() {
    yesCounter += 1;
  },
  "click .noCounter": function() {
    noCounter += 1;
  },
  "click .resetDB": function() {
    Meteor.call("resetDB");
  }
});

Template.game.helpers({
  questionCounter: function() {
    return Session.get("questionNumber");
    // return Questions.find({}).count();
  }
});

Template.info.helpers({
  greetUser: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.result.helpers({
  totalPoints: () => {
    return totalCounter;
  }
});

$(".jumbotron").click(function(){
  console.log("yolo");
  });

  $('h1,h2,h3,h4,h5,h6').click( function(){
  alert('hello');
});
