const header = document.querySelector(".header");
if (header) {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const services = header.querySelector(".menu-item-has-children");
  const servicesSubMenu = services.querySelector(".sub-menu");

  const div = document.createElement("div");
  div.innerHTML =
    '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5H9.5" stroke="#2A2A2A" stroke-linecap="round"/><path d="M1 5H9.5" stroke="#2A2A2A" stroke-linecap="round"/><path d="M1 5H9.5" stroke="#2A2A2A" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="#2A2A2A" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="#2A2A2A" stroke-linecap="round"/><path d="M5.25 0.75L5.25 9.25" stroke="#2A2A2A" stroke-linecap="round"/></svg>';

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
}
