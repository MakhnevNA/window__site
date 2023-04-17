const showImage = () => {

	const img = document.querySelectorAll('.balcon_icons_img'),
		bigImg = document.querySelectorAll('.big_img img');

	function hideImage() {
		
		img.forEach(item => {
			item.classList.remove('do_image_more')
		})
		bigImg.forEach(item => {
			item.style.display = 'none'
		})
	}

	function showImage(i = 0) {
		
		img[i].classList.add('do_image_more');
		bigImg[i].style.display = 'inline-block'
		
	}

	showImage()

	img.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			const target = e.target
			if (target && target.closest('.balcon_icons_img')) {

				hideImage()
				showImage(i)
			}
		});
	});

	

}

export default showImage;