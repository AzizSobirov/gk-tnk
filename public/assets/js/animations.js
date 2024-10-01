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
}

// gsap
const introEl = document.querySelector(".intro");
if (introEl) {
  const titles = introEl.querySelectorAll(".text-h1 span");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set(texts, { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
  });
}

const modernEl = document.querySelector(".modern");
if (modernEl) {
  const titles = modernEl.querySelectorAll(".text-h2 span");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".modern__inner",
      start: "top 75%",
      end: "bottom 75%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });

  if (modernEl.classList.contains("is-main")) {
    const images = modernEl.querySelectorAll(".modern__card img");
    gsap.set([images], { yPercent: 100 });

    gsap.to(images, {
      ease: "power4.out",
      duration: 1.5,
      yPercent: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".modern__cards",
        start: "top 65%",
        end: "bottom 65%",
      },
    });
  }
}

const professionalsEl = document.querySelector(".professionals");
if (professionalsEl) {
  const images = professionalsEl.querySelectorAll(".professionals__img img");

  gsap.set([images], { yPercent: 100 });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".professionals__img",
      start: "top 80%",
      end: "bottom 50%",
    },
  });
}

const processEl = document.querySelector(".process");
if (processEl) {
  const titles = processEl.querySelectorAll(".text-h3 span");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set(texts, { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".process",
      start: "top 90%",
      end: "bottom 65%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
}

const knowEl = document.querySelector(".know");
if (knowEl) {
  const titles = knowEl.querySelectorAll(".text-h2 span");
  const images = knowEl.querySelectorAll(".know__img img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".know__text",
      start: "top 70%",
      end: "bottom 70%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".know__img",
      start: "top 65%",
      end: "bottom 65%",
    },
  });
}

const faqEl = document.querySelector(".faq");
if (faqEl) {
  const titles = faqEl.querySelectorAll(".text-h2 span");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set(texts, { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".faq",
      start: "top 90%",
      end: "bottom 65%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
}

const weKnowEl = document.querySelector(".we-know");
if (weKnowEl) {
  const titles = weKnowEl.querySelectorAll(".text-h2 span");
  const videos = weKnowEl.querySelectorAll(".we-know video");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, videos], { yPercent: 100 });
  gsap.to([texts, videos], {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
  });
}

const aboutEl = document.querySelector(".about");
if (aboutEl) {
  const titles = aboutEl.querySelectorAll(".text-h3 span");
  const images = aboutEl.querySelectorAll(".about__img img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "bottom 70%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".about__img",
      start: "top 70%",
      end: "bottom 70%",
    },
  });
}

const galleryEl = document.querySelector(".gallery");
if (galleryEl) {
  const titles = galleryEl.querySelectorAll(".text-h3 span");
  const images = galleryEl.querySelectorAll(".gallery__item img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 70%",
      end: "bottom 70%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".gallery__item",
      start: "top 70%",
      end: "bottom 70%",
    },
  });
}

const teamEl = document.querySelector(".team");
if (teamEl) {
  const titles = teamEl.querySelectorAll(".text-h3 span");
  const images = teamEl.querySelectorAll(".team__item img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".team",
      start: "top 80%",
      end: "bottom 80%",
      scrub: window.innerWidth > 1024 ? true : false,
    },
  });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".team__item",
      start: "top 70%",
      end: "bottom 70%",
    },
  });
}

const servicesEl = document.querySelector(".services");
if (servicesEl) {
  const titles = servicesEl.querySelectorAll(".text-h2 span");
  const images = servicesEl.querySelectorAll(".services__img img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
  });

  images.forEach((image) => {
    gsap.to(image, {
      ease: "power4.out",
      duration: 1.5,
      yPercent: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: image,
        start: "top 90%",
        end: "bottom 70%",
      },
    });
  });
}

const portfolioEl = document.querySelector(".portfolio");
if (portfolioEl) {
  const titles = portfolioEl.querySelectorAll(".text-h2 span");
  const images = portfolioEl.querySelectorAll(".portfolio__list-item img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
  });

  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".portfolio__list-item",
      start: "top 90%",
      end: "bottom 70%",
    },
  });
}

const contactsEl = document.querySelector(".contacts");
if (contactsEl) {
  const titles = contactsEl.querySelectorAll(".text-h2 span");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set(texts, { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
  });
}

const serviceEl = document.querySelector(".service");
if (serviceEl) {
  const titles = serviceEl.querySelectorAll(".text-h2 span");
  const images = serviceEl.querySelectorAll(".service__content img");
  const texts = [];

  titles.forEach((title) => {
    title.setAttribute("data-animation", "fade-up");
    title.innerHTML = `<span>${title.innerHTML}</span>`;
    const item = title.querySelector("span");
    texts.push(item);
  });

  gsap.set([texts, images], { yPercent: 100 });
  gsap.to(texts, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.25,
  });
  gsap.to(images, {
    ease: "power4.out",
    duration: 1.5,
    yPercent: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".service__content-img",
      start: "top 90%",
      end: "bottom 70%",
    },
  });
}

const workStepsEl = document.querySelector(".work-steps");
if (workStepsEl) {
  const images = workStepsEl.querySelectorAll(".work-steps__img img");

  gsap.set([images], { yPercent: 100 });
  images.forEach((image) => {
    gsap.to(image, {
      ease: "power4.out",
      duration: 1.5,
      yPercent: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: image,
        start: "top 90%",
        end: "bottom 70%",
      },
    });
  });
}
