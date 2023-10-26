let btnScroll = document.getElementById("btnScroll");
let menu = document.getElementById("menu");
let about = document.getElementById("about");
let features = document.getElementById("features");
let pricing = document.getElementById("pricing");
let contacts = document.getElementById("contacts");

window.onscroll = function () {
  if (scrollY >= 100) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
};
btnScroll.onclick = function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};
menu.onclick = function () {
  scroll({
    top: 930,
    behavior: "smooth",
  });
};
about.onclick = function () {
  scroll({
    top: 1760,
    behavior: "smooth",
  });
};
features.onclick = function () {
  scroll({
    top: 2570,
    behavior: "smooth",
  });
};
pricing.onclick = function () {
  scroll({
    top: 3420,
    behavior: "smooth",
  });
};
contacts.onclick = function () {
  scroll({
    top: 4300,
    behavior: "smooth",
  });
};