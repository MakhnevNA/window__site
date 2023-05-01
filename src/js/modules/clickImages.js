import calcOverflowScroll from "./calcOverflowScroll";

const clickImages = () => {

	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImage = document.createElement('img'),
		scroll = calcOverflowScroll();
	
	
	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);

	imgPopup.style.justifyContent = 'center'
	imgPopup.style.alignItems = 'center'
	imgPopup.style.display = 'none'

	imgPopup.appendChild(bigImage);


	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			document.body.style.marginRight = `${scroll}px`; 
			document.body.style.overflow = 'hidden'
			imgPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
		}
		
		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`; 
		}

	});
}


export default clickImages