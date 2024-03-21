const starNav = document.querySelectorAll(".coffee__nav__link");
const starContent = document.querySelectorAll(".coffee__item");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});


function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}


function removeActiveContent() {
    starContent.forEach((content) => {
      content.classList.remove("active");
    });
  }
 
const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector(".header__action");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
});


const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});


function handleFocus(element) {
  element.placeholder = '';
}


// document.addEventListener('click', function(event) {
//   const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
//   inputs.forEach(input => {
//       if (!input.contains(event.target)) {
//           input.placeholder = input.getAttribute('placeholder');
//           input.style.borderColor = '#ccc';
//       }
//   });
// });


// function handleFocus(element) {
//   element.placeholder = '';
//   element.style.borderColor = 'black';
// }




// JavaScript to toggle background color on scroll
// window.addEventListener('scroll', function() {
//   var header = document.getElementById('header');
//   if (window.scrollY > 0) {
//       header.classList.add('scroll-bg-dark');
//   } else {
//       header.classList.remove('scroll-bg-dark');
//   }
// });


window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
 
  if (window.scrollY > 0) {
      header.classList.add("scroll-bg-dark");
      header.classList.add("sticky");
  } else {
      header.classList.remove("scroll-bg-dark");
      header.classList.remove("sticky");
  }
});

// window.addEventListener('scroll', function() {
//   var header = document.querySelector('.header');
//   if (window.scrollY > 0) {
//       header.classList.add("scroll-bg-black");
//       header.classList.add("sticky");
//   } else {
//       header.classList.remove("scroll-bg-black");
//       header.classList.remove("sticky");
//   }
// });




