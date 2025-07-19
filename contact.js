//selecting side navbar, menuIcon
const navIcon = document.getElementById("nav-Icon");
const sideNav = document.getElementById("sideNav");

const closeBtn = document.getElementById("closeBtn");

const overlay = document.getElementById("overlay")


// navIcon.addEventListener("click",function(){
//     if(sideNav.style.right == "-50%"){
//         sideNav.style.right = "0"
//     }
//     else 
//     {
//         sideNav.style.right = "-50%"
//     }

// })
// closeBtn.addEventListener("click", function(){
//     if(sideNav.style.right=="0"){
//         sideNav.style.right="-50%"
//     }else{
//         sideNav.style.right="0"
//     }
// })

// Open sidebar
// navIcon.addEventListener("click", function () {
//     sideNav.style.right = "0";
//     overlay.classList.remove("hidden")
//     overlay.classList.add("bg-opacity-50");
// });

function opoenSideNavBar(){
    sideNav.style.right = "0";

    setTimeout(() => {
         overlay.classList.remove("hidden")
    overlay.classList.remove("pointer-events-none")
    overlay.classList.add("bg-opacity-50");
    }, 300);
   
};

// Close sidebar
function closeSideNavbar() {
    sideNav.style.right = "-50%";
    overlay.classList.add("hidden")
    overlay.classList.add("pointer-events-none")
    overlay.classList.remove("bg-opacity-50");
 
};
navIcon.addEventListener("click",opoenSideNavBar)
closeBtn.addEventListener("click",closeSideNavbar);
overlay.addEventListener("click",closeSideNavbar);