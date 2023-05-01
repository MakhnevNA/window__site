const clickImages = () => {

	const img = document.querySelectorAll('.preview'),
		parent = document.querySelector('.works .row')


	function showBigImage(i) {
		const div = document.createElement('div'),
			img = document.createElement('img');
		
		div.append(img)
		div.classList.add('popup');
		div.style.display = 'block';
		div.style.textAlign = 'center';
		div.style.background = 'rgba(0, 0, 0, 0.8)';
		document.body.style.overflow = 'hidden'
		img.setAttribute('src', `assets/img/our_works/big_img/${i + 1}.png`)
		parent.append(div)
	}



	function closeBigImage() {
		
	}

	
	parent.addEventListener('click', (e) => {

		const target = e.target;
		e.preventDefault()

		// const div = document.createElement('div'),
		// 			imgs = document.createElement('img');
		
		img.forEach( function (item, i){
			
			if (item === target) {
				showBigImage(i)


			}

		});


	});
	


}


export default clickImages