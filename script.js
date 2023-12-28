var cards = document.querySelectorAll(".card");
var nextButton = document.querySelector(".next-button");
var prevButton = document.querySelector(".prev-button");
var currentIndex = 0;

function updateButtons() {
  var cardsPerView = getCardsPerView();
  prevButton.style.visibility = currentIndex > 0 ? "visible" : "hidden";
  nextButton.style.visibility =
    currentIndex < cards.length - cardsPerView ? "visible" : "hidden";
}

function getCardsPerView() {
  var cardWidth = cards[0].offsetWidth;
  var viewportWidth = window.innerWidth;
  return Math.floor(viewportWidth / cardWidth);
}

nextButton.addEventListener("click", function () {
  var cardsPerView = getCardsPerView();
  if (currentIndex + cardsPerView < cards.length) {
    currentIndex += cardsPerView;
    cards[currentIndex].scrollIntoView({ behavior: "smooth" });
  }
  updateButtons();
});

prevButton.addEventListener("click", function () {
  var cardsPerView = getCardsPerView();
  if (currentIndex - cardsPerView >= 0) {
    currentIndex -= cardsPerView;
    cards[currentIndex].scrollIntoView({ behavior: "smooth" });
  }
  updateButtons();
});

updateButtons();

var mybutton = document.getElementById("scrollToTopButton");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateButtonsFooter() {
  const footerContent = document.getElementById("footerContent");
  const toggleText = document.getElementById("toggleText");
  const toggleIcon = document.getElementById("toggleIcon");

  if (footerContent.style.display === "none") {
    toggleText.textContent = "Show all";
    toggleIcon.src = "img/arrow-down.svg";
  } else {
    toggleText.textContent = "Collapse all";
    toggleIcon.src = "img/arrow-up.svg";
  }
}

document.getElementById("toggleFooter").addEventListener("click", function () {
  var content = document.getElementById("footerContent");
  if (content.style.display === "none") {
    content.style.display = "block";
    updateButtonsFooter();
  } else {
    content.style.display = "none";
    updateButtonsFooter();
  }
});
