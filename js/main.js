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

function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".demo");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}



window.addEventListener("scroll", scrollReveal);
