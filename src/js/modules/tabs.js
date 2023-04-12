const tabs = (triggerSelector, contentSelector, activeSelector, activeClass) => {


	const tabsTrigger = document.querySelectorAll(triggerSelector),
		tabsContent = document.querySelectorAll(contentSelector),
		tabsActive = document.querySelectorAll(activeSelector);
	
	
	function hideTabs() {
		tabsContent.forEach((item, i)=> {
			item.style.display = 'none';
		});

		tabsActive.forEach(item => item.classList.remove(activeClass))
		
	}

	function showTabs(i = 0) {
		tabsContent[i].style.display = 'block';
		tabsContent[i].classList.add('animated', 'fadeIn')

		tabsActive[i].classList.add(activeClass)
	}
	
	hideTabs();
	showTabs();




	tabsTrigger.forEach((item, i) => {
		item.addEventListener('click', (e) => {

			console.log(tabsContent)
			

			
			hideTabs();
			showTabs(i);
			
			
		});

		
	})
	



}

export default tabs;