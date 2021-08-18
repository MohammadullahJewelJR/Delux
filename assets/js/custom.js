var toggleNave = document.getElementById("toggle-navigation");
function openNav() {
    document.getElementById("toggle-navigation").style.height = "200px";
    document.getElementById("toggle-navigation").style.display = "block";
    document.getElementById("toggle-navigation").style.transition = "3s";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("open-btn").style.display = "none";
}
function closeNav() {
    document.getElementById("toggle-navigation").style.height = "0";
    document.getElementById("toggle-navigation").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
};

// ====================== Navigation 
// var new_scroll_position = 0;
// var last_scroll_position;
// var header = document.getElementById("header-navigation");

// window.addEventListener('scroll', function(e) {
//   last_scroll_position = window.scrollY;

//   // Scrolling down
//   if (new_scroll_position < last_scroll_position || last_scroll_position > 30) {
//       header.removeClass('slideDown').addClass('slideUp');
//       header.classList.remove("sticky");
//       header.classList.add("sticky");

//   // Scrolling up
//   } else  {
//     header.removeClass('slideUp').addClass('slideDown');
//     header.classList.remove("sticky");
//     header.classList.add("sticky");
//   }
//   new_scroll_position = last_scroll_position;
// });
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header-navigation");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 50) {
    // header.removeClass('slideDown').addClass('slideUp');
    // header.classList.remove("slideDown");
    header.classList.add("slideDown");
    header.classList.remove("slideUp");
    
  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.add("slideUp");
    header.classList.remove("slideDown");
  }

  new_scroll_position = last_scroll_position;
});
// ========================= Count Area 
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});
// =========================== Owl Carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        // Most important owl features
            loop:true,
            autoplay:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                800:{
                    items:2,
                    nav :false
                },
                992:{
                    items:3,
                    nav :false
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:true
                }
            }

    });
})

// =========================== WOW JS
new WOW().init();