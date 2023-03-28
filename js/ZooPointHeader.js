function dogMenuHover() {
    let dog = document.querySelector('.dog');
    dog.addEventListener('mouseover', function () {
        document.querySelector(".dog-menu").classList.add("menu-slider");
    });
    dog.addEventListener('mouseout', function () {
        document.querySelector(".dog-menu").classList.remove("menu-slider");
    });
}

function catMenuHover() {
    let cat = document.querySelector('.cat');
    cat.addEventListener('mouseover', function () {
        document.querySelector(".cat-menu").classList.add("menu-slider");
    });
    cat.addEventListener('mouseout', function () {
        document.querySelector(".cat-menu").classList.remove("menu-slider");
    });
}

function rodentsMenuHover() {
    let rodents = document.querySelector('.rodents');
    rodents.addEventListener('mouseover', function () {
        document.querySelector(".rodents-menu").classList.add("menu-slider");
    });
    rodents.addEventListener('mouseout', function () {
        document.querySelector(".rodents-menu").classList.remove("menu-slider");
    });
}

function birdsMenuHover() {
    let birds = document.querySelector('.birds');
    birds.addEventListener('mouseover', function () {
        document.querySelector(".birds-menu").classList.add("menu-slider");
    });
    birds.addEventListener('mouseout', function () {
        document.querySelector(".birds-menu").classList.remove("menu-slider");
    });
}
document.addEventListener('DOMContentLoaded', function () {
    dogMenuHover();
    catMenuHover();
    rodentsMenuHover();
    birdsMenuHover();
});