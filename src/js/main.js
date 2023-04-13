import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './service/forms';


window.addEventListener('DOMContentLoaded', () => {
	
	modal();
	tabs('.glazing_block', '.glazing_content', '.glazing_block a', 'active');
	tabs('.no_click', '[data-name = "decoration"]', '.no_click', 'after_click');
	forms()
	
});