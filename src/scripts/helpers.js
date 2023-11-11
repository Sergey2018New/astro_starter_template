let vars = {};

// Remove a class from all array elements
vars.removeClasses = (array, className) => {
	for (let i = 0; i < array.length; i += 1) {
		array[i].classList.remove(className);
	}
}

// Add a class to all array elements
vars.addClasses = (array, className) => {
	for (let i = 0; i < array.length; i += 1) {
		array[i].classList.add(className);
	}
}

export default vars;
