sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
  ],
  function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("Hospital.Component", {
      metadata: {
        rootView: {
          viewName: "Hospital.view.Clinic",
          type: "XML",
          async: true,
          id: "app"
        }
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      }
    });
  }
);
