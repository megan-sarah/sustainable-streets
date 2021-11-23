gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);



gsap.timeline({
  scrollTrigger: {trigger: "#path", start: 'top top', end: 'bottom 200px',
                  //markers: true,
                  scrub: true},
  ease: "none"
}).to("#sadgirl", {
  motionPath: {
    path: "#path",
    align: "#path",
    //autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}, 0)

gsap.timeline({
  scrollTrigger: {trigger: "#path", start: 'top top', end: 'bottom 200px',
                  //markers: true,
                  scrub: true},
  ease: "none"
}).to("#sadboy", {
  motionPath: {
    path: "#path",
    align: "#path",
    //autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}, 0)


/* second path */
gsap.timeline({
  scrollTrigger: {trigger: "#path2", start: 'top top', end: 'bottom 200px',
                  //markers: true,
                  scrub: true},
  ease: "none"
}).to("#happygirl", {
  motionPath: {
    path: "#path2",
    align: "#path2",
    //autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}, 0)

gsap.timeline({
  scrollTrigger: {trigger: "#path2", start: 'top top', end: 'bottom 200px',
                  //markers: true,
                  scrub: true},
  ease: "none"
}).to("#happyboy", {
  motionPath: {
    path: "#path2",
    align: "#path2",
    //autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
}, 0)





gsap.to(".speech-bubble-two", {
  x: 10,
  y:1600,
  left:'50%', top:'50%',
  xPercent:'-50', yPercent:'-50',
   //duration: 2,
  scrollTrigger:{
    trigger: ".first-timeline",
    start: "top 40%",
    end: "bottom +=500",
    scrub: 1,
    toggleActions: "restart pause resume complete",
    //        onEnter / onLeave / onEnterBack /onLeaveBack
   // markers: {
    //  startColor:"purple",
    //  endColor:"fuchsia",
    // fontsize:"3rem"

    //}
  }
})

gsap.to(".speech-bubble-two", {
  x: 10,
  y:1600,
  left:'50%', top:'50%',
  xPercent:'-50', yPercent:'-50',
   //duration: 2,
  scrollTrigger:{
    trigger: ".second-timeline",
    start: "top 40%",
    end: "bottom +=500",
    scrub: 1,
    toggleActions: "restart pause resume complete",
    //        onEnter / onLeave / onEnterBack /onLeaveBack
   // markers: {
    //  startColor:"purple",
    //  endColor:"fuchsia",
    // fontsize:"3rem"

    //}
  }
})

//part skating

gsap.utils.toArray('.fade').forEach(section => {
    gsap.to(section, {
      opacity:0,
      scrollTrigger: {
        trigger: section,
        start:"0% 100%",
        end:"50% 50%",
        scrub: true,
     //   markers: true,
      }
    });
      gsap.to(section,{
      opacity:1,
      scrollTrigger: {
        trigger: section,
        start:"50% 0%",
        end:"100% 0%",
        scrub: true,
      //  markers: true,
      }
    });
});

const containers = gsap.utils.toArray(".gsap-container");
containers.forEach((container) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true
    }
  });

  tl.to(container, {
    autoAlpha: 1
  }).to(
    container,
    {
      autoAlpha: 0
    },
    0.5
  );
});
