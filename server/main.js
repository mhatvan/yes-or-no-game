import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {_} from "meteor/underscore";

import {Questions} from "../collections/questions.js";

Meteor.publish("questions", function() {
  console.log(Questions.find({}).length);
  return Questions.find({});
  // console.log(Questions.findOne({_id: "ddxguzapKr7Ch85Nn"}));
  // return Questions.findOne({questionNumber: Session.get('questionNumber')});
});

Meteor.methods({
  startQuestions: () => {
    var questionList = [
      {
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
      },
      {
        questionNumber: 3,
        question: "Do you have a pet?",
        answerA: "Yes",
        answerB: "No"
      },
      {
        questionNumber: 4,
        question: "Do you like mcdonalds?",
        answerA: "Yes",
        answerB: "No"
      },
      {
        questionNumber: 5,
        question: "Can you sing?",
        answerA: "Yes",
        answerB: "No"
      }];

    _.each(questionList, function(questions) {
      Questions.insert(questions);
    });
  },
  resetDB: () => {
    Questions.remove({});
  },
  nextQuestion: () => {
    // console.log("blubb");
  }
});
