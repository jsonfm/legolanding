const loader = document.querySelector('.loader');


window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('disable');
    }, 2000);
})