// ! Back To Top Button
var button = document.querySelector('#backToTopButton');
window.addEventListener('scroll', showTopButton);

function showTopButton() {
    if (window.scrollY > 100) {
        console.log('show');
        button.style.display = 'block ';
    } else {
        console.log('dont show');
        button.style.display = 'none';
    }
}


function openMenu() {
    console.log('tıklandı');
    const computedStyle = getComputedStyle(menu)
    if (computedStyle.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

// ! Navbar add active class

$(document).ready(function () {
    $(window).scroll(function () {
        $('.nav-link').each(function () {
            var sectionID = $(this).attr('href');
            var sectionTop = $(sectionID).offset().top - 100; // 100 piksel üst boşluk ekledik
            var sectionBottom = sectionTop + $(sectionID).height();

            if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() <= sectionBottom) {
                $('.nav-link').removeClass('active'); // önce tüm active sınıflarını kaldır
                $(this).addClass('active'); // aktif olan bölüm için active sınıfı ekleyin
            }
        });
    });
});







// ! Navbar js background change

const navbar = document.querySelector('#navbar');
const emailLink = document.querySelector('#email')
const linkedinLink = document.querySelector('#linkedin')
const twitterLink = document.querySelector('#twitter')



if (window.innerWidth > 991) {
    window.addEventListener('scroll', changeColor);

    // ! Navbar icon color change
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $('.social-link i').css('color', 'white')
            } else {
                $('.social-link i').css('color', 'black')
            }
        })
    })
}


function changeColor() {
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'white'
        emailLink.style.backgroundColor = '#1F79FD';
        linkedinLink.style.backgroundColor = '#1F79FD';
        twitterLink.style.backgroundColor = '#1F79FD';
    } else {
        navbar.style.backgroundColor = 'transparent';
        emailLink.style.backgroundColor = '#f1f1f1';
        linkedinLink.style.backgroundColor = '#f1f1f1';
        twitterLink.style.backgroundColor = '#f1f1f1';
    }
}

// ! Mobile navbar navbar-toggler 

const navbarToggler = document.querySelector('#navbar-toggler');
const menu = document.querySelector('#menu');

navbarToggler.addEventListener('click', openMenu);

function openMenu() {
    console.log('tıklandı');
    const computedStyle = getComputedStyle(menu)
    if (computedStyle.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

// ! Write User Name Step by Step

let nameArea = document.querySelector('#name');

let nameText = "Carlos Stone";
let index = 0;


function writeName() {
    if (index < nameText.length) {
        nameArea.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(writeName, 100)
    }
}

writeName()

// ! Count Completed Work
let completedWorksNumber = document.querySelector('#completedWorksNumber');

let counter = 0

function writeCompletedWorks() {
    if (counter < 148) {
        completedWorksNumber.innerHTML = counter + '+';
        counter++;
        setTimeout(writeCompletedWorks, 5)
    }
}

writeCompletedWorks();