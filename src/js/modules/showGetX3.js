import { openModal } from "./modal";
const showGetX3 = () => {
  const modal = document.querySelector('.modal__overlay[data-modal="2"]');
  const banner = document.querySelector('.getx3');
  banner.classList.add('hide');
  openModal(modal, 'open');
  modal.addEventListener("click", () => {
    if(!modal.classList.contains('open')) {
      banner.classList.add('show');
    }
  })
}

export default showGetX3;