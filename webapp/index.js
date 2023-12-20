sap.ui.define(["sap/m/Text"], function (Text) {
  "use strict";
  XMLView.create({
    viewName: sap.ui.demo.walkthrough.viewApp,
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
