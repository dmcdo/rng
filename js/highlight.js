document.addEventListener('click', () => {
	Array.from(document.getElementsByClassName('listElemRepeatSelected')).forEach(elem => {
		elem.classList.remove('listElemRepeatSelected');
	});

	if (event.target.className.includes('listElemRepeat')) {
		Array.from(document.getElementsByClassName('listElemRepeat')).forEach(elem => {
			if (elem.innerText == event.target.innerText) {
				elem.classList.add('listElemRepeatSelected');
			}
		});
	}
});
