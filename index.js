var crsr=document.querySelector("#cursor")
var blrr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px"
    crsr.style.top=dets.y+1+"px"
    blrr.style.left=dets.x-150+"px"
    blrr.style.top=dets.y-150+"px"
})
var h4all  = document.querySelectorAll("#nav .x")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=2  /*making 2 times bigger with changed border and color*/
    crsr.style.border="1px solid white"
    crsr.style.backgroundColor="transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1  /*making 2 times bigger with changed border and color*/
    crsr.style.border="0px"
    crsr.style.backgroundColor="rgb(57, 70, 255)"
  })

})
  gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub: 1,
    }
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 6,
    height: "92px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
   
gsap.from("#about img, #aboutusin",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.5,   /*one by one*/
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1
   }
})

gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:true
   }
})  /*THIS IS MAKING TILTING EFFECT OFF*/

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }

})

gsap.from("#colon2",{
  y:+70,
  x:+70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }

})

gsap.from("#page4 h1",{
  y:300,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 85%",
    end:"top 84%",
    scrub:1

  }
})
