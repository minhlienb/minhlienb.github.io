isSidebarToggled = 0

var btn_sidebar = $('.sideBarClick')
var sideBar = $('.sideBar') // Chứa đoạn side bar và cả navigation bar

btn_sidebar.click(function() {
    if (isSidebarToggled) {
       //sideBar.removeClass('sideBarOpen1')
        sideBar.removeClass('sideBarOpen2')
        isSidebarToggled = 0
    } else {
        sideBar.addClass('sideBarOpen2')
        isSidebarToggled = 1
    }
})