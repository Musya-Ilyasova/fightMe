const copyClipboard = () => {
  const copyMsg = document.createElement('div');
  copyMsg.classList.add('copy-message');
  const linkBlock = document.querySelector('.bannerinv-link');
  linkBlock.append(copyMsg);
  document.getElementById('copy-btn').onclick = function() {
    var text = document.getElementById('copy-content').dataset.text;
    copyMsg.classList.add('show');
    navigator.clipboard.writeText(text)
    .then(() => {
      copyMsg.textContent = 'Copied!'
    })
    .catch(err => {
      copyMsg.textContent = 'Error'
    });
    setTimeout(()=> {
      copyMsg.classList.remove('show')
    }, 2000)
  }
}
export default copyClipboard;

