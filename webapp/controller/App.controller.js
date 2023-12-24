sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      oniInit: function () {
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var onModel = new JSONModel(oData);
        this.getView().setModel(onModel);

        var i18nModel = new ResourceModel({
          bundleName: "sap/ui/demo/walkthrough/i18n/i18n.properties",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello: function () {
        var oIi18nModel = this.getView().getModel("i18n");

        if (oIi18nModel) {
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // alert("Hello World");
          MessageToast.show(msg);
        } else {
          console.log("error Model i18n não encontrado");
        }
      },
    });
  }
);
