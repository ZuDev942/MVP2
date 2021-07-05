const courseAPI = "https://60d4611a61160900173cb070.mockapi.io/courses"

function getCourse(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourse(courses) {
  var listCoursesBlock = document.querySelector(".courses__slide");
  let htmls = courses.map(function (course) {
    return `
    <div class="courses__column">
    <div class="courses__header">
        <a href="#">
            <img src="${course.image}"
                alt="">
        </a>
        <div class="courses__tutor">
            <span class="courses__tutor--level">${course.level}</span>
            <span class="courses__tutor--wishlist"><i class="far fa-bookmark"></i></span>
        </div>
    </div>
    <div class="courses__content">
        <p class="courses__rating">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                class="fas fa-star"></i><i class="fas fa-star"></i>
            <span class="courses__rating--number">${course.rate}.00 (${course.rate_quantity})</span>
        </p>
        <h2 class="courses__name">
            <a class="text-decoration-none" href="#">${course.name}</a>
        </h2>
        <div class="courses__enroll">
            <span><i class="far fa-user"></i>${course.total_enrolled}</span>
            <span><i class="far fa-clock"></i>${course.duration}</span>
        </div>
        <div class="courses__author">
            <img class="courses__author--avatar rounded-circle" src="images/teacher_1.jpg" alt="">
            <p>by <span>${course.teacher}</span> In <span>${course.categories}</span></p>
        </div>
    </div>
    <div class="courses__footer">
        <span class="courses__price">
          ${(course.price != 0)?('£'+course.price):('Free')}
        </span>
        <span class="courses__add"><i class="fas fa-shopping-cart"></i>Add to cart</span>
    </div>
    </div>
    `;
  })
  listCoursesBlock.innerHTML = htmls.join('');
  $('.courses__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ' <button class="courses__btn courses__btn--next"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: ' <button class="courses__btn courses__btn--prev"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

}

function start() {
  getCourse(function (courses) {
    renderCourse(courses);
  });

}
start()