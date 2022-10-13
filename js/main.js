const loader = document.querySelector('.loader');
const sideImg = document.getElementById('side-img');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('disable');
    }, 2000);

    setTimeout(() => {
        sideImg.classList.add('levitation');
    }, 3300);
})