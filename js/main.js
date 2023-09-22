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


function callback(cl) {
    $(`.box${cl}`).removeClass('effectShadow')
}

function Execute(cl) {
    $('.box').removeClass('effectShadow');
    $(`.box${cl}}`).addClass('effectShadow')
}

ScrollReveal().reveal('.box4', {
    reset: false,
    duration: 900,
    delay: 900,
    }, Execute("4")
)
