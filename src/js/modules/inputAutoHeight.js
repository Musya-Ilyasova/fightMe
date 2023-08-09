const inputAutoHeight = () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(element => {
    element.addEventListener('input', () => {
      element.style.height = '5px';
      element.style.height = (element.scrollHeight)+'px';
    })
  })
}

export default inputAutoHeight;
