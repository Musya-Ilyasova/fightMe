import modal from "./modules/modal"
import { addSlider, addHalfSlider } from "./modules/slider";
import copyClipboard from "./modules/copyClipboard";
import inputAutoHeight from "./modules/inputAutoHeight";
import showGetX3 from "./modules/showGetX3";


document.addEventListener("DOMContentLoaded", function() {
  if((document.body.classList.contains('account-page') && !document.body.classList.contains('account-page_ticket')) || document.body.classList.contains('ui')){
    modal();
    addSlider();
    copyClipboard();
    if(!document.body.classList.contains('account-page_start')) {
      addHalfSlider();
      if(document.querySelectorAll('.personprizes-slider .slider-item').length === 1) {
        showGetX3();
      }
    }
  } else if(document.body.classList.contains('auth-page') || document.body.classList.contains('ui')) {
    inputAutoHeight();
  }
})
