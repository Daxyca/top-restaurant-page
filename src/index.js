import style from "./style.css";
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import aboutPage from "./pages/about";

let currentPage;

function loadPage(page) {
    if (currentPage === page) { return }
    const pageElement = typeof page === "function" ? page() : page;
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(pageElement);
    currentPage = page;
}

loadPage(homePage);

const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const aboutBtn = document.getElementById("about-button");

homeBtn.addEventListener("click", () => loadPage(homePage));
menuBtn.addEventListener("click", () => loadPage(menuPage));
aboutBtn.addEventListener("click", () => loadPage(aboutPage));