(function () {
  var STORAGE_KEY = "assets-theme";
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var mediaQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      return;
    }
  }

  function getPreferredTheme() {
    var savedTheme = readStoredTheme();
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return mediaQuery && mediaQuery.matches ? "dark" : "light";
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

  if (mediaQuery) {
    mediaQuery.addEventListener("change", function (event) {
      var savedTheme = readStoredTheme();
      if (savedTheme === "light" || savedTheme === "dark") {
        return;
      }

      applyTheme(event.matches ? "dark" : "light");
    });
  }

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    writeStoredTheme(nextTheme);
    applyTheme(nextTheme);
  });
})();
