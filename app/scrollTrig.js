// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// var action = gsap.set('.section02 h1', {position:'fixed', color:'red', paused:true});

// ScrollTrigger.create({
//   trigger: ".droneBox",
//   start: "top top",
//   end: "bottom 100px",
//   onEnter: () => action.play(),
//   onLeave: () => action.reverse(),
//   onLeaveBack: () => action.reverse(),
//   onEnterBack: () => action.reverse(),
//   markers:true
// });

// let droneTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".Seller",
//     pin: true,
//     start: "top end",
//     end: "end end",
//     scrub: 1,
//     markers:true,
//     snap: {
//       snapTo: ".section", 
//       duration: { min: 0.2, max: 3 },
//       delay: 0.2, 
//       ease: "power1.inOut",
//     },
//   },
// })


// droneTl.to(".droneBox",{y:'200vh'})

// gsap.to("#droneBox", {
//   scrollTrigger: {
//     trigger: "#Seller",
//     start: "top bottom",
//     endTrigger: "#Buyer",
//     end: "bottom 100%-=100px",
//     onUpdate: () => console.log("workingggggg"),
//     scrub: 1,


//   },
//   y: '200vh',
// })