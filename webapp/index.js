sap.ui.require(
  ["sap/ui/core/mvc/XMLView", "sap/m/Text"],
  function (XMLView, Text) {
    "use strict";
    XMLView.create({
      viewName: "sap.ui.demo.walkthrough.viewApp",
    }).then(function (oView) {
      oView.placeAt("content");
    });
  }
);
