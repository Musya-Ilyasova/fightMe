import { openModal } from "./modal";

const showGetX3 = () => {
  const modal = document.querySelector('.modal__overlay[data-modal="2"]')
  openModal(modal, 'open');
}

export default showGetX3;