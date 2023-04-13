const checkInputs = () => {

	const numberInput = document.querySelectorAll('input[name = "user_phone"]');
	
	
	
	numberInput.forEach(item => {

		item.addEventListener('input', () => {

			let maxLength = 0;

			if (item.value[0] === '+') {
				maxLength = 12;
			} else if (item.value[0] === '8') {
				maxLength = 11;
			}

			if (item.value.length > maxLength) {
				
				item.value = item.value.slice(0, maxLength)

			}


		});

	});

	



}

export default checkInputs;