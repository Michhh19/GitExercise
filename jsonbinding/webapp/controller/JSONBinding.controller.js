sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {
                var oView = this.getView();
                var I18n = this.getOwnerComponent().getModel("i18n");
                var oI18n = this.getOwnerComponent().getModel("i18n");
                oView.setModel(oI18n,"i18n");
                
                var oAddressModel = new JSONModel();

                var oAddress = {
                    "EID" : "michelle.marana",
                    "enabled" : true,
                    "Address" : {
                        "Street" : "Sun St",
                        "City" : "Caloocan City",
                        "Zip" : "1423",
                        "Country" : "PHL"
                    },
                    "SalesAmount" :100,
                    "CurrencyCode" :"PHP"
                };
                    oAddressModel.setData(oAddress);

                    var oView = this.getView();

                    oView.setModel(oAddressModel);

            },
            onSelectProduct: function(oEvent){
                var oList = oEvent.getSource();

                var oSelItem = oList.getSelectedItem();

                var sSelItemPath = oSelItem.getBindingContextPath();

                this.getView().byId("idProductDetails").bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }
        });
    });
