import calcOverflowScroll from "./calcOverflowScroll";
import hideModal from "./hideModal";

const modal = () => {

	function bindModal(triggerSelector, modalSelector, closeTrigger, modalTrigger, prevClose = true) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelectorAll(closeTrigger),
			scrollWidth = calcOverflowScroll();

		function openModal() {
			hideModal()
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			modal.classList.add('animated', 'fadeIn');
			document.body.style.marginRight = scrollWidth + 'px'
		}

		function closeModal() {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px'
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
			if (target && target.classList.contains(modalTrigger) && prevClose) {
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
			document.body.style.marginRight = calcOverflowScroll() + 'px'
			
		}, time);
	}


	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close', 'popup_engineer');
	bindModal('.phone_link', '.popup', '.popup_close', 'popup');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', 'popup_calc');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', 'popup_calc_profile', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', 'popup_calc_end', false);

	// openModalByTime('.popup', 3000);


	


}

export default modal;