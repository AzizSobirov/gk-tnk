const header = document.querySelector(".header");
if (header) {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menu = header.querySelector(".header__menu");
  const services = header.querySelector(".menu-item-has-children");
  const servicesSubMenu = services.querySelector(".sub-menu");

  const div = document.createElement("div");
  div.classList.add("icon-plus");
  div.innerHTML =
    '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H9.5" stroke="currentColor" stroke-linecap="round"/><path d="M1 5H9.5" stroke="currentColor" stroke-linecap="round"/><path d="M1 5H9.5" stroke="currentColor" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="currentColor" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="currentColor" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="currentColor" stroke-linecap="round"/></svg>';

  services.appendChild(div);

  services.addEventListener("mouseenter", () => {
    servicesSubMenu.style.display = "grid";
    setTimeout(() => {
      servicesSubMenu.style.opacity = 1;
      servicesSubMenu.style.transform = "rotateX(0)";
    }, 300);
  });
  services.addEventListener("mouseleave", () => {
    servicesSubMenu.style.opacity = 0;
    servicesSubMenu.style.transform = "rotateX(-90deg)";
    setTimeout(() => {
      servicesSubMenu.style.display = "none";
    }, 300);
  });

  const tabs = header.querySelectorAll("#tab");
  const tabsBody = header.querySelector(".mobile__menu-content");
  const tabsContent = tabsBody.querySelector("#content");
  const tabsContentClose = tabsBody.querySelector("#close");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabsBody.style.display = "block";

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      if (tab.dataset.toggle == "menu") {
        tabsContent.innerHTML = menu.innerHTML;
      } else {
        tabsContent.innerHTML = servicesSubMenu.outerHTML;
      }
    });
  });

  tabsContentClose.addEventListener("click", () => {
    tabsContent.innerHTML = "";
    tabsBody.style.display = "none";
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  });
}

const getAccordionParents = document.querySelectorAll("[data-accordion");
getAccordionParents.forEach((parent) => {
  const isMultiple = parent.dataset.multiple;
  const accordions = parent.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion__header");
    const body = accordion.querySelector(".accordion__body");
    const content = accordion.querySelector(".accordion__content");

    header.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");
      if (!isActive) {
        accordion.classList.add("active");
        body.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("active");
        body.style.maxHeight = 0;
      }

      if (!isMultiple || isMultiple == "false") {
        accordions.forEach((el) => {
          if (el !== accordion) {
            el.classList.remove("active");
            el.querySelector(".accordion__body").style.maxHeight = 0;
          }
        });
      }
    });
  });
});

let certificatesSwiper = new Swiper(".certificates .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".certificates .btn-next",
    prevEl: ".certificates .btn-prev",
  },
  pagination: {
    el: ".certificates .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// fancybox
let dataFancybox = ["gallery", "certificates"];
dataFancybox.forEach((name) => {
  Fancybox.bind(`[data-fancybox="${name}"]`, {
    Images: { Panzoom: { maxScale: 3 } },
  });
});
