// ====================Show Search Form ====================
const searchForm = document.querySelector(".search__form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active')
    shoppinCard.classList.remove('active')
    loginForm.classList.remove('active')
    navList.classList.remove('active')
})

// ================ sHow Shopping CArd ==================

const shoppinCard = document.querySelector('.shoppingCard');
const shoppinCardBtn = document.querySelector('#cart-btn');

shoppinCardBtn.addEventListener('click', () => {
    shoppinCard.classList.toggle('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    navList.classList.remove('active')
})

// =================== Show login form ==============

const loginForm = document.querySelector('.login');
const loginBtn = document.querySelector('#login-btn')

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppinCard.classList.remove('active')
    navList.classList.remove('active')
})

// ================= Show men list =================

const navList = document.querySelector('.nav__list');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppinCard.classList.remove('active')
    loginForm.classList.remove('active')
})

// ============= remove menu at on scroll ===============

const scrollUp = document.querySelector('#scroll-top');

window.onscroll = () => {
    navList.classList.remove('active');

    // ================== Scroll top button ===============================


    if(window.scrollY > 40) {
        scrollUp.classList.add('active')
    }else {
        scrollUp.classList.remove('active')
    }
}

// ================= move the img ============================
const home = document.querySelector('.home');
const parllImg = document.querySelector('.home__img-parallImg');

home.onmousemove = (e) => {
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    parllImg.style.transform = `translateX(${y}px) translateY(${x}px)`
}

// // ============================ loder Section =====================
const loaderContainer = document.querySelector('.loader')

function loader () {
    loaderContainer.classList.add('fade-out');
}

function fadeOut () {
    setInterval(loader, 3000)
}

window.onload = fadeOut();
