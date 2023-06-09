sap.ui.define([

    "sap/ui/core/mvc/Controller",

    "sap/ui/core/routing/History",

    "sap/ui/core/UIComponent"

], function (Controller, History, UIComponent) {
    "use strict";

    return Controller.extend("zrouting.day5exercise2marana.controller.HomePage", {
        onInit: function () {

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);

        },
        _onObjectMatched: function (oEvent) {

            var sParam1 = oEvent.getParameter("arguments").Param1;

            var oText1 = this.getView().byId("idInput1");

            oText1.setValue(sParam1);

            var sParam2 = oEvent.getParameter("arguments").Param2;

            var oText2 = this.getView().byId("idInput2");

            oText2.setValue(sParam2);

        },
        onNavBack: function () {

            var oHistory = History.getInstance();

            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash && sPreviousHash !== undefined) {

                window.history.go(-1);

            } else {

                var oRouter = UIComponent.getRouterFor(this);

                oRouter.navTo("RouteHomePage");

            }

        }

    });
});