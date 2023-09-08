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
            setTimeout(() => {
                $('.sideBar').addClass('sideBarOpen1')
                
            }, 200);
            $('.sideBar').addClass('sideBarOpen2')
            isSidebarToggled = 1

        }
    })
})



