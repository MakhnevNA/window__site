const calcOverflowScroll = () => {

	const div = document.createElement('div');

	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'
	div.style.overflowY = 'scroll'

	document.body.appendChild(div);

	const scrollWidth = div.offsetWidth - div.clientWidth


	div.remove();
	
	return scrollWidth
}


export default calcOverflowScroll;