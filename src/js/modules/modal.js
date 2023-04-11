const modal = () => {

	function bindModal(triggerSelector, modalSelector, closeTrigger, modalTrigger) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelectorAll(closeTrigger);

		function openModal() {
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			modal.classList.add('animated', 'fadeIn');
		}

		function closeModal() {
			modal.style.display = 'none';
			document.body.style.overflow = '';
		}


		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				openModal();
			});
		});


		close.forEach(item => {
			item.addEventListener('click', closeModal);
		});

		modal.addEventListener('click', (e) => {
			const target = e.target;
			if (target && target.classList.contains(modalTrigger)) {
				closeModal();
			}
		});

	}


	function openModalByTime(modalSelector, time) {
		setTimeout(() => {
			const modal = document.querySelector(modalSelector);

			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			modal.classList.add('animated', 'fadeIn');
			
		}, time);
	}


	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close', 'popup_engineer');
	bindModal('.phone_link', '.popup', '.popup_close', 'popup');
	openModalByTime('.popup', 3000);


	


}

export default modal;