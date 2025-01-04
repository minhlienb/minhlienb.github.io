// Khởi tạo Lenis
const lenis = new Lenis({
    duration: 1.25,   // Thời gian hiệu ứng
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Hàm easing
    smooth: true     // Kích hoạt smooth scroll
});

// Lắng nghe sự kiện scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);





// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll Reveal
gsap.utils.toArray('.reveal').forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        start: "top -15%", // Khi phần tử xuất hiện 80% từ dưới lên
        // markers: true,
        onEnter: () => element.classList.add('slide-in-blurred-left'),
    });
});
// GSAP TIMELINE
const durr = "+=1500";
var timeline = gsap.timeline();
var themeAnim = gsap.timeline();

var introTextHeight = document.querySelector("#introSection"); // dùng với #introText thì lại ko có tác dụng???

timeline
    .to("#background", {
        scrollTrigger: {
            trigger: ".immersiveBG",
            start: "top",
            end: "+=600px",
            scrub: true,
            // markers: true,
            pin: true,
            pinSpacing: true,
        },
        width: "100%",
        height: "100%",
        // "background-position": "1% 0%",
        "border-radius": "0px",
        ease: "power2.inOut",
    })
    .to(".MeetOurMembers", {
        scrollTrigger: {
            scroller: window,
            trigger: ".MeetOurMembers",
            start: "top", // When the top of the box hits the center of the viewport
            end: durr, // End after scrolling 500px
            pin: true, // Pin the box when it hits the start point
            // pinSpacing: true,
            scrub: true, // Smooth scrubbing
        },
        ease: "power1.inOut",
        repeat: false
    })
    .to(".box", {
        scrollTrigger: {
            scroller: window,
            trigger: ".box",
            start: "top 20%", // When the top of the box hits the center of the viewport
            end: durr, // End after scrolling 500px
            scrub: true, // Smooth scrubbing
            pin: true, // Pin the box when it hits the start point
            pinSpacing: true
        },
        x: "-=50%",
        ease: "power1.in",
        repeat: false
    })
    .to(".box .backgroundImage", {
        scrollTrigger: {
            trigger: ".backgroundImage", // ".box"
            start: "top 20%", // When the top of the box hits the center of the viewport
            end: durr, // End after scrolling 500px
            scrub: true, // Smooth scrubbing
            // markers: true // Enable markers for debugging (remove this in production)
        },
        // height: "+=40px",
        "background-position": "86% 0%",
        ease: "power1.in",
        // yoyo: true,
        // repeat: true
    })
    .to(".imgParallax1", {
        scrollTrigger: {
            trigger: ".imgParallax1",
            // start: "top 100%",
            // end: "+=100%",
            // markers: true,
            scrub: true, // Smooth scrubbing
        },
        "background-position": "0% 30%",
        // ease: "linear",
    })
    .to('#introSection #imgIntro', {
        scrollTrigger: {
            trigger: "#imgIntro",   //chỉ tác dụng khi gặp đúng triger (dùng #introSection sẽ cho ra một kết quả khác)
            // Hay bị nhầm qua .introSection thay vì #introSection
            start: "top 20%",
            pin: true,
            pinSpacing: true,
            end: `+=${introTextHeight.offsetHeight - 600}px`,
            // markers: true,
            scrub: true, // Smooth scrubbing
        },
        // width: "+=200px",
        "background-position": "0% 30%",
        // ease: "power3.Out",
    })

    .to('#paralaxBackground', {
        scrollTrigger: {
            trigger: "#imgIntro",   //chỉ tác dụng khi gặp đúng triger (dùng #introSection sẽ cho ra một kết quả khác)
            // Hay bị nhầm qua .introSection thay vì #introSection
            start: "top 20%",
            pin: true,
            pinSpacing: true,
            end: `+=${introTextHeight.offsetHeight - 600}px`,
            // markers: true,
            scrub: true, // Smooth scrubbing
        },
        // width: "+=200px",
        "background-position": "0% 30%",
        // ease: "power3.Out",

        //height: +=100px;
    });






themeAnim
    .to("body", {
        scrollTrigger: {
            trigger: ".box",
            start: "top 60%",
            end: "+=280px", // End after scrolling 500px
            scrub: true, // Smooth scrubbing
        },
        // onEnter: changeThemeColor("#ff6666"),
        color: "#fff",
        backgroundColor: "#121212",
        ease: "power1.out",
        repeat: false,
    })
    .to(".text, .MeetOurMembers", {
        scrollTrigger: {
            trigger: ".box",
            start: "top 60%",
            end: "+=280px", // End after scrolling 500px
            // markers: true,
            scrub: true, // Smooth scrubbing
        },
        // backgroundColor: "#000",
        color: "#fff",
        ease: "power1.out",
        repeat: false
    })
    .to("::-webkit-scrollbar-track", {
        scrollTrigger: {
            trigger: ".box",
            start: "top 60%",
            end: "+=280px", // End after scrolling 500px
            // markers: true,
            scrub: true, // Smooth scrubbing
        },
        'background': "#000",
        color: "#fff",
        ease: "power1.out",
        repeat: false
    })