/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zrouting/day5exercise2_marana/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
