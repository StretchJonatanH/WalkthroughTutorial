sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    "../model/helper",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, formatter, helper, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        formatter: formatter,
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
        onFilterInvoices(oEvent){
            const aFilter=[];
            const sQuery= oEvent.getParameter("query");

            if(helper.isNumeric(sQuery)){
                aFilter.push(new Filter("Quantity", FilterOperator.EQ, sQuery));
            }else if (sQuery){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            //Filter binding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress(oEvent){
            const oItem = oEvent.getSource();
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail",
            {invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
        });
        }
	});
});