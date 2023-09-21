isSidebarToggled = 0

let btn_sidebar = $('.sideBarClick')
let sideBar = $('.sideBar') // Chứa đoạn side bar và cả navigation bar

$(document).ready(function() {
    $('.sideBarClick').click(function() {
        if (isSidebarToggled) {
            $('.sideBar').removeClass('sideBarOpen1')
            $('.sideBar').removeClass('sideBarOpen2')
            isSidebarToggled = 0
        } else { ///isToggled == 0
            $('.sideBar').addClass('sideBarOpen1')
            setTimeout(() => {
                $('.sideBar').addClass('sideBarOpen2')
                
            }, 200);
            isSidebarToggled = 1

        }
    })
})


ScrollReveal({reset: true})
ScrollReveal().reveal('.box1', { delay: 1000 });