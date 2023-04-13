import checkInputs from "../modules/checkInputs";

const forms = () => {
	
	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input');
	
	

	function clearInputs() {
		input.forEach(input => {
			input.value = '';
		});
	}

	checkInputs();

	
	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Данные успешно отправлены, мы скоро с вами свяжемся!',
		fail: 'Что-то пошло не так'
	}

	
	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await res.text();
		
	}
	


	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();


			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			item.append(statusMessage);


			const formData = new FormData(item);

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res)
					statusMessage.textContent = message.success;

				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 3000);
				})

			

		});


	});




	


}

export default forms;