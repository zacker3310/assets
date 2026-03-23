(function () {
  var STORAGE_KEY = "assets-theme";
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function getPreferredTheme() {
    var savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (!toggle) {
      return;
    }

    var isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));

    var state = toggle.querySelector(".theme-toggle-state");
    if (state) {
      state.textContent = isDark ? "Dark" : "Light";
    }
  }

  applyTheme(getPreferredTheme());

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
})();
