gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1024) {
  var cursor = new MouseFollower({
    iconSvgSrc: "./assets/img/icons",
    stateDetection: {
      "-link": "[data-cursor='link']",
      "-view": "[data-cursor='view']",
    },
  });

  const cursorTriggers = document.querySelectorAll("[data-cursor]");

  const cursorsData = [
    {
      name: "link",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#fff" d="M22.25 6a1.25 1.25 0 1 0 0 2.5h15.482L6.366 39.866a1.25 1.25 0 0 0 1.768 1.768L39.5 10.268V25.75a1.25 1.25 0 1 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6z"/></svg>',
    },
    {
      name: "view",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-expand"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>',
    },
  ];

  cursorTriggers.forEach((trigger) => {
    let el = document.querySelector(".mf-cursor-media-box");

    const _cursor = cursorsData.find(
      (data) => data.name === trigger.dataset.cursor
    );

    trigger.addEventListener("mouseenter", () => {
      el.innerHTML = _cursor.icon;
      cursor.show();
    });
    trigger.addEventListener("mouseleave", () => {
      el.innerHTML = "";
      cursor.hide();
    });
  });

  // gsap
  // const introTitles = [...document.querySelectorAll(".intro .text-h1 span")];
  // const modernTitles = [...document.querySelectorAll(".modern .text-h2 span")];
  // const modernCards = [...document.querySelectorAll(".modern .modern__card")];

  // const master = gsap.timeline({});
  // const setInitialStates = () => {
  //   gsap.set([introTitles, modernTitles], {
  //     yPercent: 100,
  //   });
  // };

  // const UIAnimation = () => {
  //   const tl = gsap.timeline({
  //     delay: 0.5,
  //     defaults: {
  //       ease: "power3.out",
  //       duration: 1.5,
  //       yPercent: 0,
  //       y: 0,
  //     },
  //   });

  //   tl.to([introTitles], {
  //     stagger: 0.25,
  //   });

  //   tl.to([modernTitles], {
  //     stagger: 0.25,
  //     scrollTrigger: {
  //       trigger: ".modern",
  //       start: "top 65%",
  //       end: "bottom 65%",
  //       scrub: true,
  //     },
  //   });

  //   // modernCards.forEach((card) => {
  //   //   tl.fromTo(
  //   //     card,
  //   //     { y: 100 },
  //   //     {
  //   //       y: -50,
  //   //       scrollTrigger: {
  //   //         trigger: card,
  //   //         start: "top bottom",
  //   //         end: "bottom top",
  //   //         scrub: true,
  //   //       },
  //   //     }
  //   //   );
  //   // });

  //   return tl;
  // };

  // master.add(setInitialStates()).add(UIAnimation());
}
