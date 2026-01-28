const btnMobile = document.getElementById("mobile_btn");
const menuMobile = document.getElementById("mobile-menu");
const icon = btnMobile.querySelector("i");

btnMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  btnMobile.classList.toggle("active");

  // Troca o ícone
  if (menuMobile.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark"); // ícone de "X"
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars"); // volta o hambúrguer
  }
});

//sombra no header e link ativo no menu
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-item a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const offset = header.offsetHeight;

  // sombra no header
  header.style.boxShadow =
    scrollTop === 0 ? "none" : "0 2px 8px rgba(0,0,0,0.15)";

  sections.forEach((section) => {
    const top = section.offsetTop - offset - 10;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollTop >= top && scrollTop < bottom) {
      navLinks.forEach((link) => link.parentElement.classList.remove("active"));

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.parentElement.classList.add("active");
        }
      });
    }
  });
});

// animações

ScrollReveal({ reset: false });

// HOME
ScrollReveal().reveal(".card-text-content", {
  origin: "left",
  duration: 1500,
  distance: "50px",
});
ScrollReveal().reveal(".card-image-placeholder img", {
  origin: "right",
  duration: 1500,
  distance: "50px",
  delay: 200,
});

// SOBRE MIM
ScrollReveal().reveal(".img-container", {
  origin: "left",
  duration: 1200,
  distance: "40px",
});
ScrollReveal().reveal(".texto", {
  origin: "right",
  duration: 1200,
  distance: "40px",
  delay: 150,
});

// TECNOLOGIAS
ScrollReveal().reveal(".img-espada", {
  origin: "bottom",
  duration: 1200,
  distance: "60px",
});
ScrollReveal().reveal(".icons-tec i", {
  origin: "bottom",
  duration: 800,
  distance: "30px",
  interval: 100,
});

// PROJETOS
ScrollReveal().reveal(".github h3", {
  origin: "top",
  duration: 1000,
  distance: "30px",
});
ScrollReveal().reveal(".img-git", { scale: 0.85, duration: 1200 });
ScrollReveal().reveal(".github a", {
  origin: "bottom",
  duration: 1000,
  distance: "20px",
  delay: 200,
});

// CONTATO
ScrollReveal().reveal(".contato h3", {
  origin: "top",
  duration: 1000,
  distance: "20px",
});
ScrollReveal().reveal(
  "#contact-form label, #contact-form input, #contact-form textarea, #contact-form button",
  {
    origin: "bottom",
    duration: 800,
    distance: "20px",
    interval: 100,
  },
);

// FOOTER
ScrollReveal().reveal("#footer_items", {
  origin: "bottom",
  duration: 1000,
  distance: "20px",
});
