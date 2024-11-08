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

const emailValidation = () => {
    const submit = document.querySelector(".form-container");
    const email = document.querySelector(".email");
    const name = document.querySelector(".name");
    const phone = document.querySelector(".phone");
    const message = document.querySelector(".message");

    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const msgEmail = 
        `
            <b>Nama: </b>${name.value}
            <br>
            <b>Alamat Email: </b>${email.value}
            <br>
            <b>Nomor Telepon: </b>${phone.value}
            <br>
            <b>Pesan: </b>${message.value}
            <br>
        `;
        const showNotification = (type, message) => {
            Notiflix.Notify[type](message, {
                width: '350px',
                position: 'right-bottom',
                timeout: 3000,
                fontFamily: 'Quicksand',
                CSSAnimation: true,
                clickToClose: true,
                cssAnimationStyle: 'from-right',
            });
        };
        const emptyInput = () => showNotification('failure', 'Mohon lengkapi semua kolom input!');
        const boxSuccess = () => showNotification('success', 'Pesan anda berhasil terkirim');
        const boxUnsuccess = () => showNotification('failure', 'Mohon maaf tunggu beberapa saat lagi!');

        if (name.value === "" || email.value === "" || phone.value === "" || message.value === "") {
            emptyInput();
        } else {
            const emailSend = () => {        
                Email.send(
                    {
                    SecureToken: "4a749f93-5e89-4a8c-b53b-da77b21e4fef",
                    To : 'xenemies.27@gmail.com',
                    From : "xenemies.27@gmail.com",
                    Subject : "Message From " + email.value,
                    Body : msgEmail
                    }
                ).then(
                    (message) => {
                        boxSuccess();
                        console.log(message);
                    },
                    (err) => {
                        console.log("Error: " + err);
                        boxUnsuccess();
                    }
                );
            }
            emailSend();
            email.value = "";
            name.value = "";
            phone.value = "";
            message.value = "";
        }
    });
}

emailValidation();
dropdownActivated();
navbarActivated();

