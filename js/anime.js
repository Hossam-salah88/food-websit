document.addEventListener("DOMContentLoaded", () => {
  //Intitial page load animation
  anime
    .timeline({
      easing: "easeOutExpo",
    })
    .add({
      targets: "header",
      width: ["0px", "100%"],
    })

    .add({
      targets: ".nav__item, .nav__btn div",
      translateY: [20, 0],
      opacity: [0, 1],
      delay: (el, i) => 100 * i,
      offset: "-=700",
    })

    .add({
      targets: ".home__title, .home__subtitle, .home__info, .home__data div",
      translateY: [10, 0],
      easing: "spring(1, 80, 8, 30)",
      delay: (el, i) => 100 * i,
      offset: "-=700",
      opacity: [0, 1],
    })

    .add(
      {
        targets: ".home__img",
        translateX: [20, 0],
        easing: "spring(1, 80, 8, 30)",
        opacity: [0, 1],
      },
      2500
    )

    .add({
      targets:
        ".chooseUs__title, .chooseUs__subtitle, .chooseUs__paragraph, .chooseUs__data div",
      translateY: [10, 0],
      easing: "spring(1, 80, 8, 30)",
      delay: (el, i) => 100 * i,
      opacity: [0, 1],
    })

    .add({
      targets: ".chooseUs__img",
      translateX: [20, 0],
      easing: "spring(1, 80, 8, 30)",
      opacity: [0, 1],
    });
});
