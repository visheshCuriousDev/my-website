/**
 * Template Name: MyResume - v4.9.0
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };
  
    /**
     * Navbar links active state on scroll
     */
    const navbarlinksActive = () => {
      let navbarlinks = [...document.querySelectorAll("#navbar .scrollto")];
      let position = window.scrollY + 200;
      let activeNavbarlink;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          activeNavbarlink = navbarlink;
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
      // Since contact box is small need to make sure to highlight it
      if(document.documentElement.scrollHeight <= (window.pageYOffset + window.innerHeight + 500)) {
        activeNavbarlink?.classList.remove("active");
        navbarlinks[navbarlinks.length-1].classList.add("active");
      }
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
  
  })();
  