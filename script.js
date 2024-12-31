const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const menu = document.getElementById("menu");

function openMenu() {
  menu.style.display = "block";
  openBtn.style.display = "none";
}

function closeMenu() {
  menu.style.display = "none";
  openBtn.style.display = "block";
}
