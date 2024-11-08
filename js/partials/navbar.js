const dropdownActivated = () => {
    const langDropdown = document.querySelector(".inp-lang");
    const dropdown = document.querySelector(".dropdown-lang");
    
    langDropdown.addEventListener('click', () => {
        dropdown.classList.toggle("dropdown-lang-active");
    });
}

const navbarActivated = () => {
    const btnToggle = document.querySelector(".menu-icon");
    const navPopup = document.querySelector(".nav-popup");
    
    btnToggle.addEventListener('click', () => {
        navPopup.classList.toggle("opt-container");
        btnToggle.classList.toggle("move");
    });
}