/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting the default way
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Send the form data using EmailJS
        emailjs.init('fO1tmOKZtnZrPwfzZ');
        emailjs.send("service_tls2srb","template_xwd7hff",{
            from_name: name,
            message: message,
            reply_to: email,
        })
        .then(function(response) {
            alert("Message sent successfully, we will respond within 3 working days!");
            form.reset();
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    });
});

// document.getElementById('languageSelect').addEventListener('change', function() {
//     const selectedLang = this.value.replace('.html', '');
//     localStorage.setItem('preferredLanguage', selectedLang);
//     window.location.href = this.value;
// });

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("languageSelect");
    
    if (languageSelect) {
        // Set the selected option based on current page
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage) {
            const options = languageSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === currentPage) {
                    options[i].selected = true;
                    break;
                }
            }
        }

        // Add event listener for language change
        languageSelect.addEventListener("change", function() {
            const selectedLang = this.value.replace('.html', '');
            localStorage.setItem('preferredLanguage', selectedLang);
            window.location.href = this.value;
        });
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const languageSelect = document.getElementById("languageSelect");
  
//     if (languageSelect) {
//       // Set the selected option based on the current page URL
//       const currentPage = window.location.pathname;
//       const options = languageSelect.options;
  
//       for (let i = 0; i < options.length; i++) {
//         if (options[i].value === currentPage.split("/").pop()) {
//           options[i].selected = true;
//           break;
//         }
//       }
  
//       // Add event listener for language change
//       languageSelect.addEventListener("change", function () {
//         const selectedLanguage = this.value;
//         window.location.href = selectedLanguage; // Redirect to the corresponding page
//       });
//     }
//   });
  

$(window).load(function() {
    jQuery('#all').click();
    return false;
});

$(document).ready(function() {
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	
    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });


});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
// document.getElementById('').onclick = function() {
//     var section = document.createElement('section');
//     section.className = 'wow fadeInDown';
//     section.className = 'wow shake';
//     section.className = 'wow zoomIn';
//     section.className = 'wow lightSpeedIn';
//     this.parentNode.insertBefore(section, this);
// };