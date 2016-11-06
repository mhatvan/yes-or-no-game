import {Meteor} from 'meteor/meteor';

import {Questions} from "../collections/questions.js";

Meteor.publish("questions", function() {
  return Questions.find({});
});

Meteor.methods({
  startQuestions: () => {
    Questions.insert({
      questionNumber: 1,
      question: "Do you like pop music?",
      answerA: "Yes",
      answerB: "No"
    },
      {
        questionNumber: 2,
        question: "Do you like ice cream?",
        answerA: "Yes",
        answerB: "No"
      }
  );
  },
  resetDB: () => {
    Questions.remove({});
  },
  loggedUser: () => {
    console.log(Meteor.user().emails[0].address);
    return (Meteor.user().emails[0].address);
  }
});
