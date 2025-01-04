// Readme: Ảnh phải có độ phân giải thấp



// Tracker: ("*").onClick("writeLog("this.ele.name")")
// alert("Your screen is: " + window.innerWidth + "x" + window.innerHeight);
// Initialize Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger with Lenis scroll position
lenis.on('scroll', ScrollTrigger.update);

// GSAP TIMELINE
const durr = "+=1500";
var timeline = gsap.timeline();

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
