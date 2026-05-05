sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "nwproducts/controller/BaseController"
], (Controller,JSONModel,BaseController) => {
    "use strict";

    return BaseController.extend("nwproducts.controller.Main", {
        onInit() {
            sap.m.MessageToast.show("Welcome to SAP Fiori World!");
            this.fetchData();

           
        },
        _showData(){
             var oModel = this.getOwnerComponent().getModel();
            this.fetchData1(oModel,'/Shippers')
            .then(x=>{
                let json1 = new JSONModel();
                json1.setData(x.results[0]);
                this.getView().setModel(json1,'be');
                this.getView().byId('idpanel1').bindElement('be>/')
            })
            .catch(y=>{

            })
        },
     
        fetchData(oEvent)  {
           var oModel = this.getOwnerComponent().getModel();
           var eset = '/Products';
           this.setBusy(true);
            oModel.read(eset,{
            urlParameters : {
                "$expand" : 'Supplier'
            },
               success : (req)=>{
                this.setBusy(false);
                    var json1 = new JSONModel();
                    json1.setData(req.results);
                    this.getView().setModel(json1,"prod");
               },
               error : (errmsg) =>{
                this.setBusy(false);
                let sMessage = "Error Occured";
                  try {
                     const ores = JSON.parse(errmsg.responseText);
                     sMessage = ores.error.message.value;

                  } catch (error) {
                        sMessage = error.message;
                  }
               }
            });
        this.getOwnerComponent().getModel().attachRequestFailed(oEvent=>{
                        const oParams = oEvent.getParameter('response');
                        sap.m.MessageToast.show("Global Error :" + oParams.message);
                    });

        }
    });
});