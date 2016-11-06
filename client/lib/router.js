import {FlowRouter} from "meteor/kadira:flow-router";
import {BlazeLayout} from "meteor/kadira:blaze-layout";

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("MainLayout", {content: "mainContent"});
  }
});

FlowRouter.route('/test', {
  action: function() {
    BlazeLayout.render("MainLayout", {content: "testContent"});
  }
});
