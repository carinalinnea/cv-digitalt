// scroll to top
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
 window.scrollTo(0, 0);
});

// Animation
function reveal() {
 var reveals = document.querySelectorAll(".reveal");

 for (var i = 0; i < reveals.length; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = reveals[i].getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     reveals[i].classList.add("active");
   } else {
     reveals[i].classList.remove("active");
   }
 }
}

window.addEventListener("scroll", reveal);

