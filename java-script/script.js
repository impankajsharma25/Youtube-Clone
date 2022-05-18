var menuicon = document.querySelector(".menu-icon");
var Sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function(){
    Sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}