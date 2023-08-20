import KeenSlider from 'keen-slider';
import { openModal } from "./modal";

export const addSlider = () => {
  const arrowLeft = document.querySelector(".prizes .slider__left");
  const arrowRight = document.querySelector(".prizes .slider__right");
  var slider = new KeenSlider (
    '#slider',
    {
      loop: false,
      mode: "free-snap",
      slides: {
        perView: "auto",
        spacing: 12
      },
      range: {
        max: 4,
        align: false
      }
    }
  )
  slider.on("optionsChanged", () => {
    updateClasses()
  })
  slider.on("slideChanged", () => {
    updateClasses()
  })

  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add("slider__arrow_disabled")
      : arrowLeft.classList.remove("slider__arrow_disabled")
    slide === 1
      ? arrowRight.classList.add("slider__arrow_disabled")
      : arrowRight.classList.remove("slider__arrow_disabled")
  }
  arrowLeft.addEventListener("click", () => slider.prev());
  arrowRight.addEventListener("click", () => slider.next());
}


export const addHalfSlider = () => {
  const slidesCount = document.querySelectorAll('.personprizes-slider .slider-item').length;
  const arrowLeft = document.querySelector(".personprizes .slider__left");
  const arrowRight = document.querySelector(".personprizes .slider__right");
  if(slidesCount<=2) {
    arrowLeft.style.display = "none";
    arrowRight.style.display = "none";
  } else {
    var halfSlider = new KeenSlider (
      '#personprizes-slider',
      {
        loop: false,
        mode: "free-snap",
        slides: {
          perView: "auto",
          spacing: 12
        },
        range: {
          align: false
        }
      }
    )
    halfSlider.on("optionsChanged", () => {
      updateClasses()
    })
    halfSlider.on("slideChanged", () => {
      updateClasses()
    })

    function updateClasses() {
      var slide = halfSlider.track.details.rel;
      slide === 0
        ? arrowLeft.classList.add("slider__arrow_disabled")
        : arrowLeft.classList.remove("slider__arrow_disabled")
      slide === halfSlider.track.details.slides.length-2
        ? arrowRight.classList.add("slider__arrow_disabled")
        : arrowRight.classList.remove("slider__arrow_disabled")
    }
    arrowLeft.addEventListener("click", () => halfSlider.prev());
    arrowRight.addEventListener("click", () => halfSlider.next());
  }
}

export const clickHalfSliderItem = () => {
  const slide = document.querySelectorAll(".personprizes-slider .slider__item");
  slide.forEach(item => {
    item.addEventListener('click', () =>  {
      const modal = document.querySelector('.modal__overlay[data-modal="1"]');
      openModal(modal, 'open');
    })
  })
}



