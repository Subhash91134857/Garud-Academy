/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  // let scrollTop = document.querySelector('.scroll-top');

  // function toggleScrollTop() {
  //   if (scrollTop) {
  //     // window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  //     scrollTop.classList.add('active')
  //   }
  // }
  // scrollTop.addEventListener('click', (e) => {
  //   e.preventDefault();

  // });
  // Scroll to Top button visibility
  window.addEventListener("scroll", function () {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 200) {
      scrollTopButton.classList.add('active');
    } else {
      scrollTopButton.classList.remove('active');
    }
  });

  // window.addEventListener('load', toggleScrollTop);
  // document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  // window.addEventListener('load', function (e) {
  //   if (window.location.hash) {
  //     if (document.querySelector(window.location.hash)) {
  //       setTimeout(() => {
  //         let section = document.querySelector(window.location.hash);
  //         let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
  //         window.scrollTo({
  //           top: section.offsetTop - parseInt(scrollMarginTop),
  //           behavior: 'smooth'
  //         });
  //       }, 100);
  //     }
  //   }
  // });
  window.addEventListener('load', function (e) {
    const hash = window.location.hash;
    console.log(hash);
    // Check if the hash is valid (not just # or #!)
    if (hash && hash.length > 2 && document.querySelector(hash)) {
      setTimeout(() => {
        let section = document.querySelector(hash);
        if (section) {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  });


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


document.addEventListener('DOMContentLoaded', function () {
  const langButton = document.getElementById('current-lang');
  let currentLang = localStorage.getItem('language') || 'hi'; // Default to Hindi ('hi')

  // Mapping sections and their corresponding class names
  const contentElements = {
    "home": {
      "siteName": document.querySelector('.siteName'),
      "register-button": document.querySelector('.register-button')
    },
    "resume": {
      "about_me_desc": document.querySelector('.about_me_desc'),
      "about-me-text": document.querySelector('.about-me-text'),
      "my-journey-text": document.querySelector('.my-journey-text'),
      "resume-title-1": document.querySelector('.resume-title-1'),
      "resume-item-1-location": document.querySelector('.resume-item-1-location'),
      "resume-item-1-desc-1": document.querySelector('.resume-item-1-desc-1'),
      "resume-item-1-desc-2": document.querySelector('.resume-item-1-desc-2'),
      "resume-item-1-desc-3": document.querySelector('.resume-item-1-desc-3'),

      "resume-title-2": document.querySelector('.resume-title-2'),
      "resume-item-2-location": document.querySelector('.resume-item-2-location'),
      "resume-item-2-desc-1": document.querySelector('.resume-item-2-desc-1'),
      "resume-item-2-desc-2": document.querySelector('.resume-item-2-desc-2'),
      "resume-item-2-desc-3": document.querySelector('.resume-item-2-desc-3'),

      "resume-title-3": document.querySelector('.resume-title-3'),
      "resume-item-3-location": document.querySelector('.resume-item-3-location'),
      "resume-item-3-desc-1": document.querySelector('.resume-item-3-desc-1'),
      "resume-item-3-desc-2": document.querySelector('.resume-item-3-desc-2'),
      "resume-item-3-desc-3": document.querySelector('.resume-item-3-desc-3'),

      "resume-title-4": document.querySelector('.resume-title-4'),
      "resume-item-4-location": document.querySelector('.resume-item-4-location'),
      "resume-item-4-desc-1": document.querySelector('.resume-item-4-desc-1'),
      "resume-item-4-desc-2": document.querySelector('.resume-item-4-desc-2'),
      "resume-item-4-desc-3": document.querySelector('.resume-item-4-desc-3'),

      "resume-title-5": document.querySelector('.resume-title-5'),
      "resume-item-5-location": document.querySelector('.resume-item-5-location'),
      "resume-item-5-desc-1": document.querySelector('.resume-item-5-desc-1'),
      "resume-item-5-desc-2": document.querySelector('.resume-item-5-desc-2'),
      "resume-item-5-desc-3": document.querySelector('.resume-item-5-desc-3')
    }
  };

  // Function to load and apply content based on the current language
  function loadContent(lang) {
    fetch(`content-${lang}.json`)
      .then(response => response.json())
      .then(data => {
        // Iterate through each section and update the content
        Object.keys(contentElements).forEach(section => {
          Object.keys(contentElements[section]).forEach(key => {
            if (contentElements[section][key]) {
              contentElements[section][key].textContent = data[section][key];
            }
          });
        });
      })
      .catch(error => console.error('Error loading content:', error));
  }

  // Function to toggle between Hindi ('hi') and English ('en')
  function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    localStorage.setItem('language', currentLang);
    langButton.textContent = currentLang === 'hi' ? 'EN' : 'HINDI';
    loadContent(currentLang);
  }

  // Set button to current language and load the corresponding content
  langButton.textContent = currentLang === 'hi' ? 'EN' : 'HINDI';
  loadContent(currentLang);

  // Add event listener to switch languages when button is clicked
  langButton.addEventListener('click', toggleLanguage);
});


// Registration
document.addEventListener('DOMContentLoaded', function () {
  const registerButton = document.querySelector('.register-button');
  registerButton.textContent = localStorage.getItem('language') === 'en' ? "Submit Another Response" : "पहले से ही पंजीकृत"
  // registerButton.addEventListener('click', function (e) {
  //   if (localStorage.getItem('isRegistered') === 'yes') {
  //     e.preventDefault();
  //     console.log(localStorage.getItem('language'));
  //     registerButton.textContent = localStorage.getItem('language') === 'en' ? "Already Registered" : "पहले से ही पंजीकृत"
  //   }
  // });
});



/// particles-js

document.addEventListener("DOMContentLoaded", function () {
  // Initialize particles.js with polygon animation
  particlesJS('particle-js', {
    "particles": {
      "number": {
        "value": 40, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#8a8d8f" // White color for polygons
      },
      "shape": {
        "type": "polygon", // Polygon shape
        "stroke": {
          "width": 1,
          "color": "#8a8d8f"
        },
        "polygon": {
          "nb_sides": 5 // 5-sided polygons (pentagons)
        }
      },
      "opacity": {
        "value": 0.9,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 2.5, // Polygon size
        "random": true, // Random size for variety
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true, // Enable lines between polygons
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true, // Enable movement
        "speed": 2, // Slow speed for smooth animation
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas", // Interactive events detected on canvas
      "events": {
        "onhover": {
          "enable": true, // Enable hover effects
          "mode": "grab" // Grab nearby polygons on hover
        },
        "onclick": {
          "enable": true, // Enable click effects
          "mode": "push" // Push new particles on click
        },
        "resize": true // Adjust on window resize
      },
      "modes": {
        "grab": {
          "distance": 200, // Distance to grab particles
          "line_linked": {
            "opacity": 1 // Make lines more visible on hover
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true // Detect retina display for sharper particles
  });

});



// contact us form submission

const form = document.getElementById("contactForm");
const scriptURL = 'https://script.google.com/macros/s/AKfycby3ArXEI0fbqe4bA7PaoRihOpl-7NXmTA_yyLWQQHyivyWRJ1m41UZv3gwAixw9RSFivg/exec';  // Replace with your Google Apps Script URL

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent form default behavior
  document.querySelector('.loading').style.display = 'block';  // Show loading message
  document.querySelector('.sent-message').style.display = 'none';  // Hide previous success message
  document.querySelector('.error-message').style.display = 'none';  // Hide previous error message

  // Handle form submission
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        document.querySelector('.loading').style.display = 'none';  // Hide loading message
        document.querySelector('.sent-message').style.display = 'block';  // Show success message
        form.reset();  // Clear the form after submission
      })
      .catch(error => {
        document.querySelector('.loading').style.display = 'none';  // Hide loading message
        document.querySelector('.error-message').style.display = 'block';  // Show error message
      });
});

