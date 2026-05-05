sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("nwproducts.controller.BaseController", {

        fetchData1(oModel,sPath){
            return new Promise((res,rej)=>{
                oModel.read(sPath,{
                    success : (odata)=>res(odata),
                    error:(msg)=>rej(msg)
                })
            })
        },
        
getModel : function(sName){
        return this.getView().getModel(sName);
       },
       setModel : function(sName,oModel){
        return this.getView().setModel(sName,oModel);
       },
       getRouter : function(){
        return sap.ui.core.UIComponent.getRouterFor(this);
       },

  setBusy : function(x){
        if(x)
        return sap.ui.core.BusyIndicator.show(0);
    else
    return sap.ui.core.BusyIndicator.hide();
       }


            });
});