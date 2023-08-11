import KeenSlider from 'keen-slider';

export const addSlider = () => {
  const arrowLeft = document.querySelector(".slider__left");
  const arrowRight = document.querySelector(".slider__right");
  var slider = new KeenSlider (
    '#my-slider',
    {
      loop: false,
      mode: "free-snap",
      slides: {
        perView: "auto",
        spacing: 12
      },
      range: {
        max: 6,
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
    console.log(slider.track.details)
    slide === 0
      ? arrowLeft.classList.add("slider__arrow_disabled")
      : arrowLeft.classList.remove("slider__arrow_disabled")
    slide === 4
      ? arrowRight.classList.add("slider__arrow_disabled")
      : arrowRight.classList.remove("slider__arrow_disabled")
  }
  arrowLeft.addEventListener("click", () => slider.prev());
  arrowRight.addEventListener("click", () => slider.next());
}


export const addHalfSlider = () => {
  const arrowLeft = document.querySelector(".slider__left");
  const arrowRight = document.querySelector(".slider__right");
  var slider = new KeenSlider (
    '#personalprizes-slider',
    {
      loop: false,
      mode: "free-snap",
      slides: {
        perView: "auto",
        spacing: 12
      },
      range: {
        max: 6,
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
    console.log(slider.track.details)
    slide === 0
      ? arrowLeft.classList.add("slider__arrow_disabled")
      : arrowLeft.classList.remove("slider__arrow_disabled")
    slide === 4
      ? arrowRight.classList.add("slider__arrow_disabled")
      : arrowRight.classList.remove("slider__arrow_disabled")
  }
  arrowLeft.addEventListener("click", () => slider.prev());
  arrowRight.addEventListener("click", () => slider.next());
}



