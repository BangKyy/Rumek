AOS.init();

// Google Analytics
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TGTJK127MC');

// const gsapAnimate = () => {
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     ScrollTrigger.create({
//         trigger: ".box-c",
//         pin: true,
//         start: "center center",
//         end: "+=300",
//         markers: true
//     });
//     ScrollTrigger.normalizeScroll(true);
    
//     const smoother = ScrollSmoother.create({
//         content: '#smooth-wrapper',
//         smooth: 8,
//         smoothTouch: 0.8,
//         normalizeScroll: true,
//         ignoreMobileResize: true,
//         effects: true,
//     });
//     smoother.effects("img", { speed: "auto" });

//     document.querySelector(".other-info").addEventListener("click", () => {
//         smoother.scrollTo(".connect-container", true, "center center");
//       });
    
// }

const dropdownActivated = () => {
    const lengDropdown = document.querySelector(".inp-lang");
    const dropdown = document.querySelector(".dropdown-lang");
    
    lengDropdown.addEventListener('click', () => {
        dropdown.classList.toggle("dropdown-lang-active");
        console.log(1)
    });
}

const navbarActivated = () => {
    const btnToggle = document.querySelector(".menu-icon");
    const navPopup = document.querySelector(".nav-popup");
    
    btnToggle.addEventListener('click', () => {
        navPopup.classList.toggle("opt-container");
        btnToggle.classList.toggle("move");
        console.log(1)
    });
}

const brandSlides = () => {
    window.addEventListener("resize", () => {
        if(window.innerWidth <= 780) {
            const copy = document.querySelector(".brands-slide").cloneNode(true);
            document.querySelector(".brands-group").appendChild(copy);
        }
    })
}

// gsapAnimate();
dropdownActivated();
navbarActivated();
// brandSlides();