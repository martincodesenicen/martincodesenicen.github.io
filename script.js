const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", darkMode);
});

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}
