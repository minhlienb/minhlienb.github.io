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

// function scrollReveal() {
// 	var revealPoint = 150;
// 	var revealElement = document.querySelectorAll(".ctn-img");
// 	for (var i = 0; i < revealElement.length; i++) {
// 		var windowHeight = window.innerHeight;
// 		var revealTop = revealElement[i].getBoundingClientRect().top;
// 		if (revealTop < windowHeight - revealPoint) {
// 			// revealElement[i].style.backgroundPositionX +=
// 			$('.ctn-img').animate({
// 				'background-position-x': '+=2'
// 			}, 0);
// 		} else {
// 			$('.ctn-img').animate({
// 				'background-position-x': '-=2'
// 			}, 0);
// 		}
// 	}
// }

// window.addEventListener("scroll", scrollReveal);

function MoveImage() {
	var revealElement = document.querySelectorAll(".ctn-img")[0];
	var revealTop = revealElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
	if (revealTop < windowHeight) {
		revealElement.style.backgroundPositionX += 1;
	} else if (revealTop > windowHeight) {
		revealElement.style.backgroundPositionX += 1;
	}
}


// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
	console.log('UP');
	$('.ctn-img').animate({
		'background-position-x': '+=10'
	}, 0);
  } else {
	console.log('DOWN');
	$('.ctn-img').animate({
		'background-position-x': '-=10'
	}, 0);
  }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});