import style from "./style.css";
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import aboutPage from "./pages/about";

function loadPage(page) {
    if (typeof page === "function") {
        page = page()
    }
    const content = document.getElementById("content");
    content.textContent = ""
    content.appendChild(page)
}

loadPage(homePage)

const homeBtn = document.getElementById("home-button")
const menuBtn = document.getElementById("menu-button")
const aboutBtn = document.getElementById("about-button")

homeBtn.addEventListener("click", () => loadPage(homePage))
menuBtn.addEventListener("click", () => loadPage(menuPage))
aboutBtn.addEventListener("click", () => loadPage(aboutPage))