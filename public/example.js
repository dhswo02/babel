"use strict";

require("babel-register");

require("babel-polyfill");

function allAdd() {
	return Array.from(arguments).map(function (a) {
		return a + 2;
	});
}