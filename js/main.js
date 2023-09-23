// isSidebarToggled = 0

// let btn_sidebar = $('.sideBarClick')
// let sideBar = $('.sideBar') // Chứa đoạn side bar và cả navigation bar

// $(document).ready(function() {
//     $('.sideBarClick').click(function() {
//         if (isSidebarToggled) {
//             $('.sideBar').removeClass('sideBarOpen1')
//             $('.sideBar').removeClass('sideBarOpen2')
//             isSidebarToggled = 0
//         } else { ///isToggled == 0
//             $('.sideBar').addClass('sideBarOpen1')
//             setTimeout(() => {
//                 $('.sideBar').addClass('sideBarOpen2')
                
//             }, 200);
//             isSidebarToggled = 1

//         }
//     })
// })

var Box1 = document.getElementsByClassName("box1")[0];
var Box2 = document.getElementsByClassName("box2")[0];
var Box3 = document.getElementsByClassName("box3")[0];
var Box4 = document.getElementsByClassName("box4")[0];
var Box5 = document.getElementsByClassName("box5")[0];
var Box6 = document.getElementsByClassName("box6")[0];


ScrollReveal().reveal('.box1', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box1.classList.add("effectShadow")
       },
    afterReset: function() {
        Box1.classList.remove("effectShadow")
       }
    }
)
ScrollReveal().reveal('.box2', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box2.classList.add("effectShadow")
       },
    afterReset: function() {
        Box2.classList.remove("effectShadow")
       }
    }
)
ScrollReveal().reveal('.box3', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box3.classList.add("effectShadow")
       },
    afterReset: function() {
        Box3.classList.remove("effectShadow")
       }
    }
)
ScrollReveal().reveal('.box4', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box4.classList.add("effectShadow")
       },
    afterReset: function() {
        Box4.classList.remove("effectShadow")
       }
    }
)
ScrollReveal().reveal('.box5', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box5.classList.add("effectShadow")
       },
    afterReset: function() {
        Box5.classList.remove("effectShadow")
       }
    }
)
ScrollReveal().reveal('.box6', {
    reset: true,
    duration: 500,
    delay: 1200,
    afterReveal: function() {
        Box6.classList.add("effectShadow")
       },
    afterReset: function() {
        Box6.classList.remove("effectShadow")
       }
    }
)
