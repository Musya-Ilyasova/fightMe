const ticketLoadingVideo = () => {
  const loading = document.querySelector('.ticket-loading');
  const afterContent = document.querySelector('.ticket__container');
  setTimeout(()=> {
    loading.style.display = 'none';
    afterContent.style.opacity = '1';
  }, 3000);
}
export default ticketLoadingVideo;