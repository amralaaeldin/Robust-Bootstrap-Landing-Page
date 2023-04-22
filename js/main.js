const themeToggler = document.querySelector(".theme-toggler");

localStorage.getItem("dark-theme")
  ? applyTheme()
  : localStorage.setItem("dark-theme", 0);

function applyTheme() {
  if (parseInt(localStorage.getItem("dark-theme"))) {
    document.body.classList.add("dark");
    document.querySelectorAll(".logo").forEach((item) => {
      item.src = "./assets/logo-dark.png";
    });
    themeToggler.querySelector(".icon").classList.replace("fa-moon", "fa-sun");
    document.querySelector(".landing").classList.add("text-white");
    document.querySelector(".about").classList.add("text-white");
    document.querySelector(".faq.accordion").classList.add("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.add("text-white"));
    document
      .querySelectorAll(".text-black-50")
      .forEach((item) =>
        item.classList.replace("text-black-50", "text-white-50")
      );
  } else {
    document.body.classList.remove("dark");
    document.querySelectorAll(".logo").forEach((item) => {
      item.src = "./assets/logo.png";
    });
    themeToggler.querySelector(".icon").classList.replace("fa-sun", "fa-moon");
    document.querySelector(".landing").classList.remove("text-white");
    document.querySelector(".about").classList.remove("text-white");
    document.querySelector(".faq.accordion").classList.remove("text-white");
    document
      .querySelectorAll(".faq.accordion .accordion-header button")
      .forEach((item) => item.classList.remove("text-white"));
    document
      .querySelectorAll(".text-white-50")
      .forEach((item) =>
        item.classList.replace("text-white-50", "text-black-50")
      );
  }
}

themeToggler.addEventListener("click", () => {
  if (!parseInt(localStorage.getItem("dark-theme"))) {
    localStorage.setItem("dark-theme", 1);
  } else {
    localStorage.setItem("dark-theme", 0);
  }
  applyTheme();
});
