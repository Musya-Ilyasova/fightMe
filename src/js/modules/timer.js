//Timer
function timer() {
  const deadline = '2022-08-30';
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if(t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000*60*60*24));
      hours = Math.floor((t / (1000*60*60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.textContent = getZero(t.days) ;
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };
  setClock('.timer', deadline);

   const btns = document.querySelectorAll('button[data-modal]'),
        modal = document.querySelector('.modal'),
        modalDialog = modal.querySelector('.modal__dialog');
  const modalTimerId = setTimeout(openModal, 5000);
  function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  };
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };
  btns.forEach(item => {
    item.addEventListener('click', () => {
      openModal();
    })
  })
  modal.addEventListener('click', (e) => {
    let target = e.target;
    if(target && target !== modalDialog && !target.closest('.modal__dialog') || target && target.classList.contains('modal__close')) {
      closeModal();
    };
  });
  document.addEventListener('keydown', (e) => {
    let code = e.code;
    if(code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
  function showModalByScroll() {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}
