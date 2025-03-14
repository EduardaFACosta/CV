setHeightAndWidth();
setMenu();

/** */
window.onresize = function (event) {//When resizing the page, makes sure that the items are displayed correctly
  setHeightAndWidth();
  setMenu();
};


/**
 * Function that verifies a div height and width ( hero section )
 * and set another div to be same proportions ( the sparkles around it )
 */
function setHeightAndWidth() {
  var text_img_wrapper_height = document.getElementById('text-img-wrapper').clientHeight;
  var text_img_wrapper_width = document.getElementById('text-img-wrapper').clientWidth;
  document.getElementById('sparkle-wrapper').setAttribute("style", "height:" + text_img_wrapper_height +
    "px; width:" + text_img_wrapper_width + "px");
}

/**
 * Function that verifies the page width, 
 * and if the page width is less than 900px consider as small device
 * setting the correct nav display 
 */
function setMenu() {
  var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var nav = document.getElementById('nav');

  if (width <= 900) {
    closeMenu();
  }
  else {
    if (nav.classList.contains('open')) nav.classList.remove('open');
    if (nav.classList.contains('close')) nav.classList.remove('close');
    nav.getElementsByClassName('icon')[0].onclick = function () { };
    nav.getElementsByClassName('icon')[0].src = './assets/nav_line.png';
  }
}

/**
 * Function that open de collapsed menu
 * Add open class to style nav 
 * And remove close style of nav
 * Also updates the icon shown
 */
function openMenu() {
  var nav = document.getElementById('nav');
  nav.classList.remove('close');
  nav.classList.add('open');
  nav.getElementsByClassName('icon')[0].onclick = function () { closeMenu() };
  nav.getElementsByClassName('icon')[0].src = './assets/close_menu_icon.svg';
}

/**
 * Function that close/collaps the opened menu
 * Add close class to style nav 
 * And remove close style of nav
 * Also updates the icon shown
 */
function closeMenu() {
  var nav = document.getElementById('nav');
  nav.classList.remove('open');
  nav.classList.add('close');
  nav.getElementsByClassName('icon')[0].onclick = function () { openMenu() };
  nav.getElementsByClassName('icon')[0].src = './assets/open_menu_icon.svg';
}

/**
 * Function that redirecs to the page with the selected language
 */
function setLanguage(lang) {
  if (lang == 'pt') {
    window.location.href = 'index.html';
  }
  else {
    window.location.href = 'en.html';
  }
}

/**
 * Function that adds "smooth" scrolling to the nav links
 */
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();// Prevent default behavior

      var execptions = ['#skills', '#academic', '#experience'];// Divs that needs a difference of 6rem from the start

      var hash = this.hash;
      let top = execptions.includes(hash) ? $(hash).offset().top - 96 : $(hash).offset().top;
      $('html, body').animate({ // jQuery's animate() smooth page scroll
        scrollTop: top
      }, 900, function () {
        window.location.hash = ''; // removes hash from URL to prevent "jumping" 
      });
    }
  });
});