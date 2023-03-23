/*global QUnit*/

sap.ui.define([
	"zrouting/day5exercise2_marana/controller/HomePage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HomePage Controller");

	QUnit.test("I should test the HomePage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
