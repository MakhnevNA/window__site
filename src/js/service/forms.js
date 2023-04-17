import checkNumberInputs from "../modules/checkNumberInputs";
import hideModal from "../modules/hideModal";

const forms = (state) => {
	
	const form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input');
	

	function clearInputs() {
		input.forEach(input => {
			input.value = '';
		});
	}

	checkNumberInputs();

	
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
			if (item.getAttribute('form-end') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res)
					statusMessage.textContent = message.success;
					setTimeout(() => {
						statusMessage.remove();
						hideModal()
					}, 3000);
					clearInputs();
					
				})
				.catch(() => {
					statusMessage.textContent = message.fail;
				})
				.finally(() => {
					// clearInputs();
					
				})

			

		});


	});




	


}

export default forms;