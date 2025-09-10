const icon_menu = document.querySelector(".icon-menu");
const nav = document.querySelector(".header-nav nav");

icon_menu.onclick =() => {
    if (nav.style.transform == "translateX(0%)") {
        nav.style.transform = "translateX(-150%)";
        icon_menu.src = "./images/icon-hamburger.svg";
    } else {
        nav.style.transform = "translateX(0%)";
        icon_menu.src = "./images/icon-close.svg";
    }
};

