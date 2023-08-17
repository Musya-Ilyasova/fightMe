const getScreenHaight = () => {
  const screenHaight = window.screen.height;
  const doc = document.documentElement
  doc.style.setProperty('--screen-height', `${screenHaight}px`);
}

export default getScreenHaight;