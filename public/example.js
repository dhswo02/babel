'use strict';

require('babel-polyfill');

var example = void 0;
function allAdd() {
	return Array.from(arguments).map(function (a) {
		a + 2;
	});
}