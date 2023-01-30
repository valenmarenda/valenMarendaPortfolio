//preloader
const preloaderTL = gsap.timeline();
preloaderTL.to("#logo", {
    yPercent: -20,
    opacity: 0,
    delay: 4
});
preloaderTL.to(".preloader", {
    transform: "scaleY(0)",
    transformOrigin: "top",
    delay: "-=3"
});
// open all social links in new tab
let socialLinks = document.querySelectorAll(".social-links--box a");
socialLinks.forEach((link)=>{
    link.target = "_blank";
});
//cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e)=>{
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 15) + "px; ");
});
// navigation
const tl = gsap.timeline({
    paused: true,
    reversed: true
});
tl.to(".box", {
    height: "100vh",
    duration: .5,
    transformOrigin: "bottom",
    stagger: .3
});
tl.to(".mobile-logo", {
    opacity: "1"
});
tl.to(".nav-main__content", {
    opacity: "1",
    visibility: "visible",
    yPercent: -5,
    duration: .5,
    transformOrigin: "bottom",
    stagger: .3
});
const navIcon = document.querySelector(".nav-icon");
navIcon.onclick = function() {
    if (tl.reversed()) {
        this.classList.add("nav-anim");
        tl.play();
        document.body.classList.add("noScroll");
    } else {
        this.classList.remove("nav-anim");
        tl.reverse();
        document.body.classList.remove("noScroll");
    }
};
const allLinks = document.querySelectorAll(".list__item a");
allLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        document.body.classList.remove("noScroll");
        tl.reverse();
        navIcon.classList.remove("nav-anim");
    });
});
//Animación escritura
const typed = new Typed(".typed", {
    strings: [
        "Fullstack developer in process",
        "Based in Argentina"
    ],
    typeSpeed: 75,
    startDelay: 300,
    backspeed: 75,
    smartBackspace: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: "html"
});

//# sourceMappingURL=index.579125c3.js.map
