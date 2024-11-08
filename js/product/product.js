const languageDropdownActivated = () => {
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
const brandDropdownActivated = () => {
    const dropdowns = document.querySelectorAll(".brand-search-value");
    const boxDropdown = document.querySelectorAll(".box-dropdown");
    const selected = document.querySelectorAll(".selected");
    const value = document.querySelectorAll(".value");
    // const options = document.querySelectorAll(".dropdown-item");

    dropdowns.forEach((dropdown, i) => {
        dropdown.addEventListener('click', () => {
            boxDropdown[i].classList.toggle("dropdown-actived");
            window.addEventListener("scroll",() => {
                boxDropdown.forEach(box => {
                    box.classList.remove("dropdown-actived");
                });
            });            
        });
    })

    value.forEach((val, i) => {
        const options = document.querySelectorAll(".dropdown-item-" + (i + 1));
        options.forEach((option) => {
        option.addEventListener("click", () => {
                selected[i].innerHTML = option.innerHTML;
                // boxDropdown[i].classList.remove("dropdown-actived");
            });
        })
    })
}

languageDropdownActivated();
navbarActivated();
brandDropdownActivated();