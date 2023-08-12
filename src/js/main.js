import modal from "./modules/modal"
import { addSlider, addHalfSlider } from "./modules/slider";
import copyClipboard from "./modules/copyClipboard";
import inputAutoHeight from "./modules/inputAutoHeight";


document.addEventListener("DOMContentLoaded", function() {
  if((document.body.classList.contains('account-page') && !document.body.classList.contains('account-page_ticket')) || document.body.classList.contains('ui')){
    modal();
    addSlider();
    copyClipboard();
    if(!document.body.classList.contains('account-page_start')) {
      addHalfSlider();
    }
  } else if(document.body.classList.contains('auth-page') || document.body.classList.contains('ui')) {
    inputAutoHeight();
  }
})
