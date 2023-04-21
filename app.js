
document.querySelector("#open-sidebar").addEventListener("click", openSidebar);  
function openSidebar() {
    var sidebarElements = document.getElementsByClassName("sidebar");
    for (var i = 0; i < sidebarElements.length; i++) {
      sidebarElements[i].style.left = "0";
    }
  }

document.querySelector("#close-sidebar").addEventListener("click", closeSidebar);  
function closeSidebar() {
    var sidebarElements = document.getElementsByClassName("sidebar");
    for (var i = 0; i < sidebarElements.length; i++) {
      sidebarElements[i].style.left = "-250px";
    }
  }
  
// Obtén los elementos del sidebar y de main
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

// Agrega un listener al botón que abre el sidebar
const openSidebarBtn = document.getElementById('open-sidebar');
openSidebarBtn.addEventListener('click', function() {
  // Abre el sidebar
  sidebar.classList.add('open');
  main.classList.add('sidebar-open');
});

// Agrega un listener al botón que cierra el sidebar
const closeSidebarBtn = document.getElementById('close-sidebar');
closeSidebarBtn.addEventListener('click', function() {
  // Cierra el sidebar
  sidebar.classList.remove('open');
  main.classList.remove('sidebar-open');
});
