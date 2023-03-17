let vars = {};

// Общие константы
vars.activeClass = 'is-active';
vars.visibleClass = 'is-visible';
vars.selectedClass = 'is-selected';
vars.fixedClass = 'is-fixed';
vars.focusedClass = 'is-focused';
vars.errorClass = 'is-error';

// Убрать класс из всех элементов массива
vars.removeClasses = (array, className) => {
	for (var i = 0; i < array.length; i++) {
		array[i].classList.remove(className);
	}
}

// Добавить класс всем элементам массива
vars.addClasses = (array, className) => {
	for (var i = 0; i < array.length; i++) {
		array[i].classList.add(className);
	}
}

export default vars;