/*global QUnit*/

sap.ui.define([
	"brcomprodutos/produto/controller/Produto.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Produto Controller");

	QUnit.test("I should test the Produto controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
