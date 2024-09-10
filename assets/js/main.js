/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener("DOMContentLoaded", function () {

  const newLocal = 'particle-js';
  // Initialize particles.js with polygon animation
  particlesJS(newLocal, {
    "particles": {
      "number": {
        "value": 80, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // White color for polygons
      },
      "shape": {
        "type": "polygon", // Polygon shape
        "stroke": {
          "width": 1,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5 // 5-sided polygons (pentagons)
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 4, // Polygon size
        "random": true, // Random size for variety
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 1,
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
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

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
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
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



// Converting contents
const translations = {
  "sitename": {
    "en": "G-Academy",
    "hi": "जी-एकेडमी"
  },
  "nav_home": {
    "en": "Home",
    "hi": "होम"
  },
  "nav_about": {
    "en": "About",
    "hi": "के बारे में"
  },
  "nav_resume": {
    "en": "Resume",
    "hi": "रिज़्यूमे"
  },
  "nav_contact": {
    "en": "Contact",
    "hi": "संपर्क करें"
  },
  "hero_title": {
    "en": "Garud Academy",
    "hi": "गरुड़ अकादमी"
  },
  "hero_subtitle": {
    "en": "By an IITian, a Software Developer, an Android Developer",
    "hi": "एक आईआईटी के छात्र, एक सॉफ़्टवेयर डेवलपर, एक एंड्रॉइड डेवलपर द्वारा"
  },
  "register_free": {
    "en": "Register for Free",
    "hi": "मुफ्त में पंजीकरण करें"
  },
  "about_title": {
    "en": "About",
    "hi": "के बारे में"
  },
  "about_description": {
    "en": "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    "hi": "मैग्नम डोलोर्स कोम्डी सुसिपिट. नेसेसिटेटिबस एउस कोक्वेरात् डोर अक्विलत फुगा यूम क्विदेम्. सिट सिंट कंसैक्टेतुर् वेलिट. क्विस्क्वाम क्वोस क्विस्क्वाम क्युपिडिटेटे. एत नेमो क्वि इम्पेडिट सुसिपिट अलियास् ईए. क्यिया फुगियात् सिट इन इस्ते ऑफिसियिस कोम्डी क्विदेम् हिक् क्वास्."
  },
  "resume_title": {
    "en": "Resume",
    "hi": "रिज़्यूमे"
  },
  "resume_description": {
    "en": "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    "hi": "मैग्नम डोलोर्स कोम्डी सुसिपिट. नेसेसिटेटिबस एउस कोक्वेरात् डोर अक्विलत फुगा यूम क्विदेम्. सिट सिंट कंसैक्टेतुर् वेलिट. क्विस्क्वाम क्वोस क्विस्क्वाम क्युपिडिटेटे. एत नेमो क्वि इम्पेडिट सुसिपिट अलियास् ईए. क्यिया फुगियात् सिट इन इस्ते ऑफिसियिस कोम्डी क्विदेम् हिक् क्वास्."
  },
  "contact_title": {
    "en": "Contact",
    "hi": "संपर्क करें"
  },
  "contact_description": {
    "en": "Give us a call and we will shape your futures",
    "hi": "हमें कॉल करें और हम आपके भविष्य को आकार देंगे"
  },
  "address_title": {
    "en": "Address",
    "hi": "पता"
  },
  "address_detail": {
    "en": "A108 Adam Street, New York, NY 535022",
    "hi": "A108 एडम स्ट्रीट, न्यू यॉर्क, एनवाई 535022"
  },
  "form_name": {
    "en": "Your Name",
    "hi": "आपका नाम"
  },
  "form_email": {
    "en": "Your Email",
    "hi": "आपका ईमेल"
  },
  "form_subject": {
    "en": "Subject",
    "hi": "विषय"
  },
  "form_message": {
    "en": "Message",
    "hi": "संदेश"
  },
  "form_loading": {
    "en": "Loading",
    "hi": "लोड हो रहा है"
  },
  "form_error": {
    "en": "An error occurred while sending your message. Please try again later.",
    "hi": "आपका संदेश भेजते समय त्रुटि हुई। कृपया बाद में पुन: प्रयास करें।"
  },
  "form_sent": {
    "en": "Your message has been sent. Thank you!",
    "hi": "आपका संदेश भेज दिया गया है। धन्यवाद!"
  },
  "form_send": {
    "en": "Send Message",
    "hi": "संदेश भेजें"
  },
  "footer_copyright": {
    "en": "Copyright",
    "hi": "कॉपीराइट"
  },
  "footer_sitename": {
    "en": "G-Academy",
    "hi": "जी-एकेडमी"
  },
  "footer_all_rights": {
    "en": "All Rights Reserved",
    "hi": "सभी अधिकार सुरक्षित"
  },
  "footer_designed_by": {
    "en": "Designed by <a href=\"https://bootstrapmade.com/\">Subhash</a>",
    "hi": "द्वारा डिज़ाइन किया गया <a href=\"https://bootstrapmade.com/\">सुभाष</a>"
  }
  // ... add more translations as needed
};

// Set default language
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
  localStorage.setItem('language', currentLanguage);
  updateContent();
  updateButtonText();
}

// Function to update the content based on selected language
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    console.log("Hii");
    if (translations[key] && translations[key][currentLanguage]) {
      // Check if the element contains HTML tags
      if (element.innerHTML.match(/<[^>]+>/)) {
        element.innerHTML = translations[key][currentLanguage];
      } else {
        element.innerText = translations[key][currentLanguage];
      }
    }
  });
}

// Function to update the button text
function updateButtonText() {
  const button = document.getElementById('language-button');
  if (currentLanguage === 'en') {
    button.innerText = 'Change Language';
  } else {
    button.innerText = 'भाषा बदलें';
  }
}

// Initialize the content on page load
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  updateButtonText();
});


// Registration model
const registerBtn = document.getElementById('register-button');
console.log(registerBtn);
const formModal = document.getElementById('formModal');
const closeBtn = document.getElementById('closeBtn');

registerBtn.addEventListener('click', function () {
  formModal.classList.add('show');
});

closeBtn.addEventListener('click', function () {
  formModal.classList.remove('show');
});

// Close the modal when clicking outside of the form
window.addEventListener('click', function (e) {
  if (e.target === formModal) {
    formModal.classList.remove('show');
  }
});
