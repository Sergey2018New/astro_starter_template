import helpers from '../helpers.js';
import '../../../node_modules/choices.js/public/assets/scripts/choices.min.js';

/*
	Choices.js
	https://github.com/Choices-js/Choices
*/

const selects = document.querySelectorAll('[data-select]');

if (!selects) return;

selects.forEach(item => {
	const choices = new Choices(item, {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false
	});
});
