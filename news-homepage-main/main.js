

const navigation = document.querySelector('.navigation');
const menu_icon = document.querySelector('.menu_icon');


menu_icon.addEventListener('click', () => {


let visibility = navigation.getAttribute("data-visible");

    if(visibility === "false") {
        navigation.setAttribute("data-visible", true);
        menu_icon.setAttribute('aria-expanded', true);
    } 
      else if (visibility === "true") {
        navigation.setAttribute("data-visible", false);
        menu_icon.setAttribute('aria-expanded', false);
    }

});


