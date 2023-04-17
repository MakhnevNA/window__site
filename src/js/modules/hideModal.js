const hideModal = () => {
	
	const window = document.querySelectorAll('[data-modal]');

	window.forEach(item => {
		item.style.display = 'none'
	});


}


export default hideModal;