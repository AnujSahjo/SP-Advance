const navbar = document.getElementById("navbar");
const ahref = document.querySelectorAll(".navbar_a");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll >= 50) {
    navbar.style.backgroundColor = "#ffffff";
    
    navbar.style.top = "0px";
    navbar.style.zIndex = "999";
    navbar.style.position = "fixed";
    navbar.style.transition = "200ms ease-in-out"
    ahref.forEach((link) => {
      link.style.color = "black"; 
      

      link.addEventListener("mouseenter", () => {
        link.style.color = "#ff4500"; 
      });

     
      link.addEventListener("mouseleave", () => {
        link.style.color = "black"; 
      });
    });
  } else if (currentScroll < 80) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.position = "absolute";
    if(window.innerWidth >= 835){
    navbar.style.top = "50px";
    }
    else{
    navbar.style.top = "10px"
    }
    navbar.style.zIndex = "3";
    ahref.forEach((link) => {
      link.style.color = "white"; 


      link.addEventListener("mouseenter", () => {
        link.style.color = "#ff4500"; 
      });

    
      link.addEventListener("mouseleave", () => {
        link.style.color = "white"; 
      });
    });
  }
});

function toggle_y(){
  let toggle_y = document.querySelector(".toggle-navbar");
  toggle_y.style.right = "0"
}
function toggle_x(){
  let toggle_x = document.querySelector(".toggle-navbar");
  toggle_x.style.right = "-80vw"
}
