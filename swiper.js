
var swiper = new Swiper(".mySwiper", {
    navigation:{
        nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
    },
    slidesPerView:1,
    spaceBetween:0,


    breakpoints:{


        320:{
            slidesPerView:2.2,
            spaceBetween:0,
        },

        360:{
            slidesPerView:2.2,
            spaceBetween:0,
        },
        680:{
            slidesPerView:3.2,
            spaceBetween:10,
        },
        920:{
            slidesPerView:4,
            spaceBetween:10,
        },
        1240:{
            slidesPerView:4,
            spaceBetween:50,
        },
    }

});

//Website dark/light theme

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
    document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
    themeBtn.classList.contains("sun") ? "sun" : "moon";
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
    );
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

