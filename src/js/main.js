import modal from "./modules/modal"
import { addSlider, addHalfSlider } from "./modules/slider";
import copyClipboard from "./modules/copyClipboard";
import inputAutoHeight from "./modules/inputAutoHeight";
import showGetX3 from "./modules/showGetX3";
import animationFireworks from "./modules/animation";
import addDisableToBtn from "./modules/addDisableToBtn";
import timer from "./modules/timer";
import ticketLoadingVideo from './modules/ticketLoadingVideo';

document.addEventListener("DOMContentLoaded", function() {
  if((document.body.classList.contains('account-page') && !document.body.classList.contains('account-page_ticket')) || document.body.classList.contains('ui')){
    modal();
    animationFireworks();
    addSlider();
    copyClipboard();
    if(!document.body.classList.contains('account-page_start')) {
      addHalfSlider();
      timer('#bannerTimer');
      timer('#modalTimer');
      if(document.querySelectorAll('.personprizes-slider .slider-item').length === 1) {
        showGetX3();
      }
    }
    addDisableToBtn();
  } else if(document.body.classList.contains('auth-page') || document.body.classList.contains('ui')) {
    inputAutoHeight();
  } else if( document.body.classList.contains('account-page_ticket')) {
    ticketLoadingVideo();
  }
})
