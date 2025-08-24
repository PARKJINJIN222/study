(function () {
    const $toggle = document.getElementById("themeToggle");
    const THEME_KEY = "theme";
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark") document.documentElement.classList.add("dark");

    function applyTheme() {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
        $toggle.setAttribute("aria-pressed", String(isDark));
    }

    $toggle?.addEventListener("click", applyTheme);
})();
