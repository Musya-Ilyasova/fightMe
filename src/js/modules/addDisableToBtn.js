const addDisableToBtn = () => {
  const btn = document.querySelector('.getticket__btn .btn'),
        countTicket = document.querySelector('.ticket-count').textContent;
  if(+countTicket===0) {
    btn.classList.add('disabled');
  }
}

export default addDisableToBtn;