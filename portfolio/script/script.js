// Burger Menu 

var burgerMenu = document.getElementById('burgermenu');
var navMenu = document.getElementById('navigation');


var burgerMenuShowHide = function(event) {
    if (navMenu.style.display == 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }

}
burgerMenu.addEventListener ('click', burgerMenuShowHide);

// Menu Selected

/* var menuCurrentPage = document.location.href;
var splittedLink = menuCurrentPage.split('/')
var currentPage = splittedLink.pop();
var menuLinks = navMenu.getElementsByTagName('a');

for (var i = 0; i < menuLinks.length; i++) {
    var currentLink = menuLinks[i];
    var href = currentLink.getAttribute('href');
    if (href == currentPage) {
        currentLink.setAttribute('class', 'selected');
    }
}

*/

