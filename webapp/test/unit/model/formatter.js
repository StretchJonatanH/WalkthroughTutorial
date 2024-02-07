sap.ui.define([
    "ui5/walkthrough/model/formatter",
    "sap/ui/model/resource/ResourceModel",
    "../../../model/helper",
], (formatter, ResourceModel, helper) => {
    "use strict";

    QUnit.module("Formatting functions", {});

    QUnit.test("Should return the translated texts", (assert) => {
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("ui5/walkthrough/i18n/i18n.properties"),
            supportedLocales: [
                "sv", "en"
            ],
            fallbackLocale: "en"
        });

        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                };
            }
        };

        const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

        // Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "Ny", "The long text for Status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "Pågående", "The long text for Status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Klar", "The long text for Status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for Status Foo is correct");

    });
        // Test is Numeric
        QUnit.module("IsNumeric");

    QUnit.test("Should return number pass/failed", (assert) => {

        // Assert
        assert.strictEqual(helper.isNumeric(1), true, "True that 1 is a number");
        assert.strictEqual(helper.isNumeric("b"), false, "False that b is a number");
        assert.strictEqual(helper.isNumeric(42), true, "True that 42 is a number");
        assert.strictEqual(helper.isNumeric("Foo"), false, "The long text for Status Foo is correct");
    });

});
