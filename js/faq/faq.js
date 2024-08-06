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




dropdownActivated();
navbarActivated();
// brandSlides();