const toggleBar = () => {

    var toggleMenu = document.getElementsByClassName('nav')[0];

    if (toggleMenu.style.height == '10vh') {
        toggleMenu.style.height = '30rem'
    } else {
        toggleMenu.style.height = '10vh'
    }

}


function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth', });
}
