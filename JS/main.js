const toggleBar = () => {

    var toggleMenu = document.getElementsByClassName('nav')[0];

    if (toggleMenu.style.height == '12vh') {
        toggleMenu.style.height = '40rem'
    } else {
        toggleMenu.style.height = '12vh'
    }

}


