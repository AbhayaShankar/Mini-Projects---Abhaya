var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = () => {
  sidebar.classList.toggle("hide-sidebar");
};
