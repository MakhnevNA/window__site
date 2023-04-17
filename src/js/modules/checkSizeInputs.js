const checkSizeInputs = () => {
	
	
	function check(selector) {

		const size = document.querySelector(selector);

		size.addEventListener('input', function () {

			if (size.value.match(/\D/g)) {
				size.classList.add('animated', 'shake');
				size.style.border = '2px solid red';
				size.value = size.value.replace(/\D/gi, '');
			} else {
				size.style.border = '';
				size.classList.remove('shake');
			}
		});


	}

	check('#width');
	check('#height');

}


export default checkSizeInputs;