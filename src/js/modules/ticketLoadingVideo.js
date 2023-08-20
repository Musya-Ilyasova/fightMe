const showAfterLoadingContent = (loading) => {
  const afterContent = document.querySelector('.ticket__container');
  setTimeout(()=> {
    loading.style.display = 'none';
    afterContent.style.opacity = '1';
  }, 2000);
}

const ticketLoadingVideo = () => {
  const loading = document.querySelector('.ticket-loading'),
        video = loading.querySelector('video');
  showAfterLoadingContent(loading);
  // if (video.readyState >= video.HAVE_FUTURE_DATA) {
  //   showAfterLoadingContent(loading);
  // } else {
  //   video.addEventListener('canplay', function () {
  //     showAfterLoadingContent(loading);
  //   }, false);
  // }
}
export default ticketLoadingVideo;
