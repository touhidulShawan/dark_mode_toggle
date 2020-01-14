let darkmode = localStorage.getItem("darkmode");

const darkModeToggler = document.getElementById("dark-mode-toggler");

//  enable dark mode
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled");
};

//  disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

// check if already dark mode is enabled

if (darkmode == "enabled") {
  enableDarkMode();
}

darkModeToggler.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");

  if (darkmode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
