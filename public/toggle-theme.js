const stored = localStorage.getItem("theme");

function get() {
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let theme = get();

function toggle() {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const label = `Toggle ${theme === "dark" ? "light" : "dark"} theme`;
  document.querySelector("#theme-btn")?.setAttribute("aria-label", label);
}

function set() {
  localStorage.setItem("theme", theme);
  toggle();
}

// set early so no page flashes / CSS is made aware
toggle();

window.onload = () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    toggle();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      theme = theme === "light" ? "dark" : "light";
      set();
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme = isDark ? "dark" : "light";
    set();
  });
