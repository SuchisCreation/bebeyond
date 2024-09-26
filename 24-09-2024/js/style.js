// Sticky Header

// function headerfixed() {
//     var getscrltop = $(this).scrollTop();
//     if (getscrltop > 0) {
//         $('.main_header').addClass('sticky-header');
//     } else {
//         $('.main_header').removeClass('sticky-header');
//     }
// }
// $(window).scroll('scroll resize', headerfixed); 


// banner Video

const videoElement = document.getElementById('bg-video');
const videoOverlay = document.querySelector('.video-bg-overlay');

videoElement.addEventListener('play', () => {
    videoOverlay.classList.add('video-bg-overlay--fadeOut');
});

let headerHeight = $("#header").outerHeight();
console.log(headerHeight)
// Our Mission Zoom

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.ourMission',
    start: 'top 100px',
    end: '+=1000', 
    scrub: true,
    pin: true,
    anticipatePin: 1,
  }
});

tl.to('.content img', {
  scale: 1.2,
  duration: 2,
})
.to('.circle', {
  scale: 6, 
  duration: 4,
  ease: "none",
}, '-=2')
.to('.ourMission', {
  backgroundColor: "#ff6300",
}, '-=4');


// BNBEYOND overlay

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.bnbeyondImage1',
    start: 'center bottom',
    end: 'bottom bottom', 
    scrub: true,
  }
});

tl2.to('.bnbeyondImage .right .overlay2', {
  y: "-100%",
  duration: 2,
}, 0) 
.to('.bnbeyondImage .left .overlay2', {
  y: "100%",
  duration: 2,
}, 0);


// // Luxury Collection

// let tl3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.luxuryLeft',
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     scrub: 4,
//     markers: true 
//   }
// });

// // Timeline for the second item
// let tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '#secondItem',
//     start: "top top",
//     end: "+=1200", // Adjust this value based on the desired scroll length
//     pin: true,
//     scrub: 4,
//     markers: true
//   }
// });

// // Timeline for the third item
// let tl5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '#thirdItem',
//     start: "top 50px", // Adjust to your needs
//     end: "bottom top",
//     scrub: 4,
//     markers: true,
//     // Instead of pinning third item, we can animate it
//   }
// });

// // Animate the third item to come up as the second item is pinned
// tl5.fromTo('#thirdItem', { y: '100%' }, { y: '0%', duration: 1 });



// gsap.to(".luxuryLeft", {
//   scrollTrigger: {
//     trigger: '#luxury',
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     scrub: 4,
//     markers: true 
//   }
// });
// gsap.to("#firstItem", {
//   scrollTrigger: {
//       trigger: "#firstItem",
//       start: "bottom top",
//       end: "bottom+=300 top",
//       scrub: true,
//       onEnter: () => {
//           gsap.to("#secondItem", { y: "-100%", duration: 0.5, overwrite: "auto" });
//       },
//       onLeaveBack: () => {
//           gsap.to("#secondItem", { y: "0%", duration: 0.5, overwrite: "auto" });
//       },
//       markers: true 
//   }
// });
// gsap.to(".mergeItem", {
//   y: "100%",
//   scrollTrigger: {
//       trigger: "#secondItem",
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//       onEnter: () => {
//           gsap.to(".mergeItem", { y: "0%", duration: 0.5, overwrite: "auto" });
//       },
//       onLeaveBack: () => {
//           gsap.to(".mergeItem", { y: "100%", duration: 0.5, overwrite: "auto" });
//       },
//       markers: true 
//   }
// });
// gsap.utils.toArray('.itemWrap').forEach((item) => {
//   gsap.to(item, {
//       scrollTrigger: {
//           trigger: item,
//           start: "top center",
//           end: "bottom top",
//           scrub: true,
//           pin: true,
//           markers: true 
//       },
//       y: "-100%",
//       duration: 0.5,
//       overwrite: "auto"
//   });
// });














