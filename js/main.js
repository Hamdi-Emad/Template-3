let clients = document.querySelectorAll(".stats .number");

let section = document.querySelector(".stats .container");

let sectionProgress = document.querySelector(".our-skills .skills");

let spans = document.querySelectorAll(".our-skills .progress span");

let control = false;

//^=============================================================

function startCounter(element) {
   let goal = element.dataset.goal;
   let counter = setInterval(function () {
      element.textContent++;
      if (element.textContent == goal) {
         clearInterval(counter);
      }
   }, 5000 / goal);
}

window.addEventListener("scroll", function () {
   if (window.scrollY >= section.offsetTop) {
      if (!control) {
         clients.forEach((element) => startCounter(element));
      }
      control = true;
   }
});

//^=============================================================

window.addEventListener("scroll", () => {
   if (window.scrollY + window.innerHeight >= sectionProgress.offsetTop) {
      spans.forEach((span) => (span.style.width = span.dataset.width));
   }
});
