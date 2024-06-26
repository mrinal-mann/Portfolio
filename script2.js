var progressbar = document.querySelectorAll(".skill-progress > div");

function initialisebar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}
for (let bar of progressbar) {
  initialisebar(bar);
}

function fillbar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

function checkScroll() {
  for (let bar of progressbar) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillbar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialisebar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);
