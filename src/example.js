import 'babel-polyfill';

let example;
function allAdd() {
	return Array.from(arguments).map((a) => { a + 2;	});
}