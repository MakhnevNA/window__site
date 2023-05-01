import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './service/forms';
import checkSizeInputs from './modules/checkSizeInputs';
import showImage from './modules/showImage';
import changeFormState from './modules/changeFormState';
import clickImages from './modules/clickImages';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {

	const data = {
		form: 1
	}
	
	modal();
	tabs('.glazing_block', '.glazing_content', '.glazing_block a', 'active');
	tabs('.no_click', '[data-name = "decoration"]', '.no_click', 'after_click');
	forms(data)
	checkSizeInputs();
	showImage();
	changeFormState(data)
	clickImages();
	timer('2023-06-02')
	
});