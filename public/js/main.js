//Select the Element Function

const selectElement = function (element) {
    return document.querySelector(element);
}

let menuToggler = selectElement('.toggle-menu');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});