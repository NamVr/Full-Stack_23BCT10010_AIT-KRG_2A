document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const dashboard = document.querySelector(".dashboard");

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    dashboard.dataset.theme = savedTheme;
  }

  // Theme toggle
  toggle.addEventListener("click", () => {
    const newTheme = dashboard.dataset.theme === "light" ? "dark" : "light";
    dashboard.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  });
});
