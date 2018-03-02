import "babel-register";
import "babel-polyfill";

function allAdd() {
	return Array.from(arguments).map(a => a + 2);
}