import Lottie from "lottie-web";

const animationFireworks = () => {
  let container = document.querySelector('#js-animation');
  let path='./js/fireworks.json' ;
  let animation = Lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: path
    });
  animation.play();
}

export default animationFireworks;

