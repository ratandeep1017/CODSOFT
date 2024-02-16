$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // JavaScript code to animate progress bars
    // document.addEventListener("DOMContentLoaded", function () {
    //     animateProgressBar("python", 50);
    //     animateProgressBar("java", 50);
    // });

    // function animateProgressBar(language, percentage) {
    //     const progressBar = document.querySelector(`.bars .${language}`);
    //     const progressText = progressBar.parentElement.querySelector(".progress-text");

    //     // Set initial width
    //     progressBar.style.width = "0%";

    //     // Animate width increase
    //     setTimeout(function () {
    //         progressBar.style.width = `${percentage}%`;
    //         progressText.textContent = `${percentage}%`;
    //     }, 100);
    // }

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);


    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Photographer", "Content Creator", "Tech Enthusiast", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Photographer", "Content Creator", "Tech Enthusiast", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});



function updateMailto() {
    // Get the values from the input fields
    var nameValue = document.getElementById("nameInput").value;
    var emailValue = document.getElementById("emailInput").value;
    var subjectValue = document.getElementById("subjectInput").value;
    var messageValue = document.getElementById("messageInput").value;

    // Set the email address
    var emailAddress = "ratandeep1017@gmail.com";

    // Construct the mailto link with name, email, subject, and message
    var mailtoLink = "mailto:" + encodeURIComponent(emailAddress)
        + "?subject=" + encodeURIComponent(subjectValue)
        + "&body=Your Name: " + encodeURIComponent(nameValue)
        + "%0AYour Email: " + encodeURIComponent(emailValue)
        + "%0AYour Main Message: " + encodeURIComponent(messageValue);

    // Update the form action with the mailto link
    document.getElementById("contactForm").action = mailtoLink;

    // Submit the form
    document.getElementById("contactForm").submit();
}


// function showPopup() {
//     // Get the popup element
//     var popup = document.getElementById('popup');

//     // Display the popup
//     popup.style.display = 'block';

//     // Hide the popup after 2 seconds
//     setTimeout(function () {
//         popup.style.display = 'none';
//     }, 1000);
// }

    function showPopup() {
        // Check if any field is empty
        if (isAnyFieldEmpty()) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Get the popup element
        var popup = document.getElementById('popup');

        // Display the popup
        popup.style.display = 'block';

        // Hide the popup after 2 seconds
        setTimeout(function () {
            popup.style.display = 'none';
        }, 2500);
    }

    function isAnyFieldEmpty() {
        // Get values of input fields
        var nameValue = document.getElementById('nameInput').value;
        var emailValue = document.getElementById('emailInput').value;
        var subjectValue = document.getElementById('subjectInput').value;
        var messageValue = document.getElementById('messageInput').value;

        // Check if any field is empty
        if (nameValue.trim() === '' || emailValue.trim() === '' || subjectValue.trim() === '' || messageValue.trim() === '') {
            return true; // Some field is empty
        }

        return false; // All fields are filled
    }
    
    
    document.addEventListener("DOMContentLoaded", function () {
    const homeContainer = document.querySelector(".home");
    const backgroundContainer = document.querySelector(".background-container");
    let imageIndex = 1;
    const imageCount = 6;
    const preloadedImages = [];

    // Preload images
    for (let i = 1; i <= imageCount; i++) {
        const img = new Image();
        img.src = `images/${i}.jpg`;
        preloadedImages.push(img);
    }

    function changeBackground() {
        homeContainer.style.backgroundImage = `url("images/${imageIndex}.jpg")`;
        imageIndex = (imageIndex % imageCount) + 1; // Loop through images 1.jpg to 7.jpg
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});
