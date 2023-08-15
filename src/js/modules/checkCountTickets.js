const checkCountTickets = () => {
  const btn = document.querySelector('.getticket__btn .btn'),
        countTicket = document.querySelector('.ticket-count').textContent,
        textTicket = document.querySelector('.ticket-text');
  if(+countTicket===0) {
    btn.classList.add('disabled');
  }
  +countTicket === 1 ? 
  textTicket.textContent = "ticket"
  :
  textTicket.textContent = "tickets"
}

export default checkCountTickets;