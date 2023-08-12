export const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
  document.body.style.overflow = "hidden";
}

const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
  document.body.style.overflow = "";
}

const modal = () => {
  const btns = document.querySelectorAll(".btn[data-modal]");
  const modals = document.querySelectorAll(".modal__overlay");
  const closeBtns = document.querySelectorAll(".modal__close");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const dataBtn = btn.dataset.modal;
      const modal = document.querySelector(`.modal__overlay[data-modal="${dataBtn}"]`);
      openModal(modal, "open");
    })
  });
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if(target.classList.contains("modal__overlay")) {
        closeModal(modal, "open");
      }
    }, false)
  });
  closeBtns.forEach(close => {
    close.addEventListener("click", () => {
      const modal = close.closest(".modal__overlay");
      closeModal(modal, "open");
    })
  });
}

export default modal;
