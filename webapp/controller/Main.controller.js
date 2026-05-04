sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("nwproducts.controller.Main", {
        onInit() {
            sap.m.MessageToast.show("Welcome to SAP Fiori World!");
        }
    });
});