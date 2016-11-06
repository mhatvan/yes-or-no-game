import {FlowRouter} from "meteor/kadira:flow-router";
import {BlazeLayout} from "meteor/kadira:blaze-layout";

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("MainLayout", {content: "main"});
  }
});
//
// $("h2").click(function(){
//   alert("yolo");
//   FlowRouter.route('/result', {
//     action: function() {
//       BlazeLayout.render("MainLayout", {content: "result"});
//     }
//   });
// });

$("h2").click(function(){
  alert("yolo");
  });
