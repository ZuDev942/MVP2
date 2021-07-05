// =========== Sticky Scroll ============ //
window.onscroll = function () {
  myFunction()
};

var header = document.querySelector(".header-sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky--active");
  } else {
    header.classList.remove("sticky--active");
  }
}
// =========== SlideShow ============ //
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
setTimeout(showSlides, 5000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__img");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// ===== Play Video ====== //
const modal = document.querySelector(".faciliti__popup");
const btn = document.querySelector(".faciliti__play");
const span = document.querySelector(".faciliti__video--close");
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ====== Slide Feedback ==========>
$('.feedback__list').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: 0,
  prevArrow: 0,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});
// ====== Logo List =======>>
$('.logo__list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  nextArrow: 0,
  prevArrow: 0,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});
// ======== Platform Slide ========>>
$('.platform__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="platform--next"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button class="platform--prev"><i class="fa fa-angle-right"></i></button>',
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// ======== Popup Search =========>>
const modalSearch = document.querySelector(".modal-search");
const clickSearch = document.querySelector(".modalSearch");
const exit = document.querySelector(".modal-search__exit");
clickSearch.onclick = function () {
  modalSearch.style.display = "block";
}
exit.onclick = function () {
  modalSearch.style.display = "none";
}
// ========= Back to Top ===========>>
const buttonToTop = document.querySelector('.back--top');

const goToTop = () => {
  scrollTo(top);
};

const showToTopButton = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    buttonToTop.classList.remove('back--top__hidden');
  } else {
    buttonToTop.classList.add('back--top__hidden');
  }
};
buttonToTop.addEventListener('click', goToTop);
window.addEventListener('scroll', showToTopButton);
// ======== header moblie ========>>
// Display dropdown for mobile mode
function hideMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}