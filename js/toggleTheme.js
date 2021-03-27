const preferenceScheme = window.matchMedia("(prefers-color-scheme: dark)");
const checkbox = document.getElementById("theme-checkbox");

if (!preferenceScheme.matches) {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

const toggleTheme = () => {
  if (checkbox.checked === true) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }
};
