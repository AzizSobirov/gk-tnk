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

// accordions
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

// portfolio
const portfolio = document.querySelector(".portfolio");
if (portfolio) {
  const filters = portfolio.querySelectorAll(".portfolio__filter-item");
  const projects = portfolio.querySelectorAll(".portfolio__list-item");
  const btn = portfolio.querySelector(".btn");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      filters.forEach((el) => {
        el.classList.remove("active");
      });
      filter.classList.add("active");

      const value = filter.dataset.value;
      projects.forEach((project, index) => {
        if (value == "Все") {
          if (index < 12) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
          btn.style.display = "block";
        } else if (project.dataset.name == value) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
          btn.style.display = "none";
        }
      });
    });
  });

  btn.addEventListener("click", () => {
    projects.forEach((project) => {
      project.style.display = "block";
    });

    btn.style.display = "none";
  });
}

// seo
const seo = document.querySelector(".seo");
if (seo) {
  const dropdown = seo.querySelector(".seo__dropdown");
  const content = seo.querySelector(".seo__dropdown-content");
  const btn = seo.querySelector(".seo__btn");

  let minHeight = 0;
  let maxHeight = 0;

  minHeight = content.querySelector("p").offsetHeight;
  maxHeight = content.offsetHeight;
  dropdown.style.maxHeight = minHeight + "px";

  btn.addEventListener("click", () => {
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
      dropdown.style.maxHeight = minHeight + "px";
      btn.innerHTML = "Подробнее";
    } else {
      dropdown.classList.add("active");
      dropdown.style.maxHeight = maxHeight + "px";
      btn.innerHTML = "Скрыть";
    }
  });
}

// swiper
let certificatesSwiper = new Swiper(".certificates .swiper", {
  slidesPerView: 2,
  spaceBetween: 8,
  navigation: {
    nextEl: ".certificates .btn-next",
    prevEl: ".certificates .btn-prev",
  },
  pagination: {
    el: ".certificates .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    475: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 15,
    // },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// fancybox
let dataFancybox = ["gallery", "portfolio", "certificates"];
dataFancybox.forEach((name) => {
  Fancybox.bind(`[data-fancybox="${name}"]`, {
    Images: { Panzoom: { maxScale: 3 } },
  });
});
