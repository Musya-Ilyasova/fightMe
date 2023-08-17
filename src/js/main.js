import modal from "./modules/modal"
import { addSlider, addHalfSlider } from "./modules/slider";
import copyClipboard from "./modules/copyClipboard";
import showGetX3 from "./modules/showGetX3";
import animationFireworks from "./modules/animation";
import checkCountTickets from "./modules/checkCountTickets";
import timer from "./modules/timer";
import ticketLoadingVideo from './modules/ticketLoadingVideo';
import getScreenHaight from "./modules/getScreenHaight";


document.addEventListener("DOMContentLoaded", function() {
  getScreenHaight();
  if((document.body.classList.contains('account-page') && !document.body.classList.contains('account-page_ticket')) || document.body.classList.contains('ui')){
    modal();
    animationFireworks();
    addSlider();
    copyClipboard();
    if(!document.body.classList.contains('account-page_start') && !document.body.classList.contains('ui')) {
      addHalfSlider();
      timer('#bannerTimer');
      timer('#modalTimer');
      if(document.querySelectorAll('.personprizes-slider .slider-item').length === 1) {
        showGetX3();
      }
    }
    checkCountTickets();
  } else if( document.body.classList.contains('account-page_ticket')) {
    ticketLoadingVideo();
  }
})
