gsap.registerPlugin(ScrollTrigger)

// hero section

// gsap.from(".navbar",{duration:1,y:-100,opacity:0})
gsap.from(".profile",{duration:1,y:-50,opacity:0,delay:0.5})
gsap.from(".text-hero",{duration:1,y:-50,opacity:0,delay:0.8})
gsap.from(".icon-hero",{duration:1,y:-30,opacity:0,delay:1})

// about section

gsap.from(".about-text",{
  duration:1,
  x:-100,
  opacity:0,
  scrollTrigger:{
    // scrub:true,
    start:"top 80%",
    end:"top 40%",
    trigger:".about-text",
    toggleActions:"play",
  },
})

gsap.from(".about-profile",{
  duration:1,
  x:100,
  delay:0.5,
  opacity:0,
  scrollTrigger:{
    start:"top 80%",
    end:"top center",
    trigger:".about-text",
    // scrub:true
  }
})

gsap.from(".about-desc",{
  duration:1,
  x:-100,
  opacity:0,
  delay:0.8,
  scrollTrigger:{
    start:"top 80%",
    end:"top 60%",
    trigger:".about-desc",
    // scrub:true

  }
})

// skil section
// gsap.from(".skil-panel",{
//   duration:1,
//   opacity:0,
//   y:100,
//   scrollTrigger:{
//     start:"top 70%",
//     end:"top 40%",
//     trigger:".skil-panel",
//   }
// })

gsap.from(".skil-text",{
  duration:1,
  y:50,
  opacity:0,
  ease:"back",
  scrollTrigger:{
    trigger:".skil-text",
    start:"top 80%",
  }
})

gsap.from(".skil-card",{
  duration:1,
  delay:0.75,
  opacity:0,
  y:60,
  ease:"back",
  scrollTrigger:{
    trigger:".skil-text"
  }
})


// cursor

document.body.addEventListener("mousemove",e => {
  const X = e.clientX;
  const Y = e.clientY;

  gsap.to('.cursor',{
    x:X,
    y:Y,
    stagger:-0.1
  })
})


// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });

// const tl = gsap.timeline()
// tl.to(".panel",{x:-window.innerWidth()})

// ScrollTrigger.create({
//   snap: 1 / 8 // snap whole page to the closest section!
// });