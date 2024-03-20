let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

let sidebarAct = document.getElementById("sidebarAct");
let moreLink = document.getElementById("showMoreLink");

function toggleAct() {
  sidebarAct.classList.toggle("open-activity");
  if (sidebarAct.classList.contains("open-activity")) {
    moreLink.innerHTML = "Show less <b>-</b>";
  }else{
    moreLink.innerHTML = "Show more <b>+</b>";
  }
}

moreLink.addEventListener("click", toggleAct);
