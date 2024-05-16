let menu = document.querySelector('#menu-icon');
let slist = document.querySelector('.slist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    slist.classList.toggle('open');
};

document.addEventListener("DOMContentLoaded", function () {
    let scrollRevealExecuted = false;

    function executeScrollReveal() {
        if (!scrollRevealExecuted) {
            const sr = ScrollReveal({
                distance: '65px',
                duration: 2600,
                delay: 450,
                reset: true
            });

            sr.reveal('.entrada-text', { delay: 200, origin: 'top' });
            sr.reveal('.container', { delay: 200, origin: 'top' });
            sr.reveal('.icons', { delay: 200, origin: 'left' });
            sr.reveal('.scroll-down', { delay: 200, origin: 'right' });

            scrollRevealExecuted = true;
        }
    }

    executeScrollReveal();
});

var header = document.querySelector("header");

var headerHeight = header.offsetHeight;

window.addEventListener("scroll",function(){
    var scrolPosition = window.scrollY;
    if (scrolPosition > headerHeight){
        header.classList.add("header-scrolled");
    }else{
        header.classList.remove("header-scrolled");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});


