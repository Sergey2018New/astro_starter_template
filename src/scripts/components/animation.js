/*
	  ------------
	|   Animation  |
	  ------------

	* Базовые атрибуты:
		* data-anim - атрибут для задания анимации элементу
*/

const animItems = document.querySelectorAll('[data-anim]');

if (!animItems) return;

setTimeout(() => {
	animOnScroll();
}, 300);

window.addEventListener('scroll', animOnScroll);

function animOnScroll() {
	animItems.forEach(animItem => {
		showAnim(animItem)
	});
}

function showAnim (animItem) {
	const animItemHeight = animItem.offsetHeight;
	const animItemOffset = offset(animItem).top;
	const animStart = 4;

	let animItemPoint = window.innerHeight - animItemHeight / animStart;

	if (animItemHeight > window.innerHeight) {
		animItemPoint = window.innerHeight - window.innerHeight / animStart;
	}

	if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
		animItem.classList.add('is-active');
	} else {
		if (animItem.getAttribute('data-anim-no-hidden')) {
			animItem.classList.remove('is-active');
		}
	}
}

function offset(el) {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	}
}