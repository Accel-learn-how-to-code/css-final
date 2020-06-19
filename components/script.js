const navSlide = function () {
    var burger = document.getElementById('toggle-menu');
    var menu = document.getElementById('js-menu');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}
navSlide();