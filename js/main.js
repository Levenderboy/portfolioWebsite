const scroll = new LocomotiveScroll({
    el: document.querySelector('#mainMain'),
    smooth: true
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
validate();


function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value === "" || email.value === "" || msg.value === "") {
            emptyerror();
        } else if (!isValidEmail(email.value)) {
            invalidEmailError();
        } else {
            sendemail(name.value, email.value, msg.value);
        }
    });
}

function sendemail(name, email, msg) {
    emailjs.send("service_9i5lc65", "template_ijlr48l", {
        to_name: name,
        from_name: email,
        message: msg,
    }).then(
        function(response) {
            success();
        },
        function(error) {
            console.error('Email send failed:', error);
            sendError();
        }
    );
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function emptyerror() {
    swal({
        title: "Oh No....!",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function invalidEmailError() {
    swal({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successfully!",
        text: "We'll try to reply in 24 hours",
        icon: "success",
    });
}

function sendError() {
    swal({
        title: "Email send failed",
        text: "Please try again later.",
        icon: "error",
    });
}

validate();

// Header background change on scroll
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active',window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-active");

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle("scroll-active",window.scroll >= 400);
});

//Making responsive


