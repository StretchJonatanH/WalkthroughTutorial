sap.ui.define([
	"../../../model/helper",
], (helper) => {
	"use strict";

	QUnit.module("IsNumeric");

	QUnit.test("Should return number pass/failed", (assert) => {

        // Assert
        assert.strictEqual(helper.isNumeric(1), true, "True that 1 is a number");
        assert.strictEqual(helper.isNumeric("b"), false, "False that b is a number");
        assert.strictEqual(helper.isNumeric(42), true, "True that 42 is a number");
        assert.strictEqual(helper.isNumeric("Foo"), false, "The long text for Status Foo is correct");
	});
});