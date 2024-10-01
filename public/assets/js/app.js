// modal
const modal = {
  el: document.querySelector(".modal"),
  blocks: document.querySelectorAll(".modal__content"),
  open: function (name, animation = true) {
    const target = this.el.querySelector(`[data-root=${name}]`);

    this.el.style.display = "flex";
    target.style.display = "flex";

    if (animation) {
      setTimeout(() => {
        target.style.opacity = 1;
        target.style.transform = "scale(1)";
      }, 50);
    } else {
      target.style.opacity = 1;
      target.style.transform = "scale(1)";
    }
  },
  close: function (name, animation) {
    if (!name) {
      this.blocks.forEach((block) => {
        block.style.opacity = 0;
        block.style.transform = "scale(0.85)";
      });
    } else {
      const target = this.el.querySelector(`[data-root=${name}]`);
      target.style.opacity = 0;
      target.style.transform = "scale(0.85)";

      if (!animation) {
        target.style.display = "none";
      } else {
        setTimeout(() => {
          target.style.display = "none";
        }, 350);
      }
    }

    if (animation) {
      setTimeout(() => {
        this.el.style.display = "none";
      }, 350);
    }
  },
};

const modalTriggers = document.querySelectorAll("[data-modal]");
modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const name = trigger.dataset.modal;
    if (name !== "close") {
      modal.open(name);
    } else {
      modal.close(null, true);
    }
  });
});

// form
[].forEach.call(document.querySelectorAll("[data-mask]"), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    let reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";

    if (this.value.length == 18 || this.value.length == 0) {
      input.dataset.numbervalid = "true";
    } else {
      input.dataset.numbervalid = "false";
    }
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false);
});

const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.id == "form") {
      modal.open("success");
    } else {
      modal.close("form", false);
      modal.open("success", false);
    }

    setTimeout(() => {
      modal.close("success", true);
    }, 3000);
  });
});

// header
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
