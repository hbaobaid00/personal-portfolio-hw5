document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const select = document.getElementById("theme-select");

    if (!select) return;

    select.hidden = false;

    // Load saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = savedTheme || (prefersDark ? "dark" : "light");

    applyTheme(initial);
    select.value = initial;

    select.addEventListener("change", () => {
        const newTheme = select.value;

        if (document.startViewTransition) {
            document.startViewTransition(() => applyTheme(newTheme));
        } else {
            applyTheme(newTheme);
        }
    });

    function applyTheme(theme) {
        root.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }
});