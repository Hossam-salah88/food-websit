document.addEventListener("DOMContentLoaded", () => {
  //Intitial page load animation
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: "header",
      width: ["0px", "100%"]
    })

    .add({
      targets: ".nav__item, .nav__btn div",
      translateY: [20, 0],
      opacity: [0, 1],
      delay: (el, i) => 100 * i,
      offset: "-=700"
    })

    .add({
      targets: ".home__title, .home__subtitle, .home__info, .home__data div",
      translateY: [10, 0],
      easing: "spring(1, 80, 8, 30)",
      delay: (el, i) => 100 * i,
      offset: "-=700",
      opacity: [0, 1]
    })

    .add(
      {
        targets: ".home__img",
        translateX: [20, 0],
        easing: "spring(1, 80, 8, 30)",
        opacity: [0, 1]
      },
      2500
    );

  // .add({
  //   targets:
  //     ".chooseUs__title, .chooseUs__subtitle, .chooseUs__paragraph, .chooseUs__data div",
  //   translateY: [10, 0],
  //   easing: "spring(1, 80, 8, 30)",
  //   delay: (el, i) => 100 * i,
  //   opacity: [0, 1]
  // })
});

// anime for choose us section

let timeLineOne = anime.timeline();

// anime for choose us img section
let animeChooseUsImg = {
  targets: ".chooseUs__img",
  translateX: [0, 40],
  easing: "spring(1, 80, 8, 30)",
  opacity: [0, 1],
  duration: 2000
};

// anime for choose us data section
let animeChooseUsData = {
  targets:
    ".chooseUs__title, .chooseUs__subtitle, .chooseUs__paragraph, .chooseUs__data div",
  translateY: [10, 0],
  easing: "spring(1, 80, 8, 30)",
  delay: (el, i) => 100 * i,
  opacity: [0, 1]
};

const chooseUs = document.querySelector(".chooseUs");
const chooseUsOptions = {
  threshold: [0, 1],
  rootMargin: "0px 0px -200px 0px"
};
function animation(entries, chooseUsObserver) {
  if (!entries[0].isIntersecting) {
    return;
  } else {
    timeLineOne.add(animeChooseUsImg).add(animeChooseUsData, "-=700");
    chooseUsObserver.unobserve(entries[0].target);
  }
}
const chooseUsObserver = new IntersectionObserver(animation, chooseUsOptions);
chooseUsObserver.observe(chooseUs);
