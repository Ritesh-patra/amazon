


var tl = gsap.timeline();
tl.from(".logo,.dili,.fa-location-dot,.india",{
    x:-50,
    opacity:0,
    duration:1,
    delat:.5,
    stagger:.5,
    pin:true
})

tl.from(".nav-search,.nav-singing,.nav-return,.fa-cart-shopping,.cart",{
  x:-50,
  opacity:0,
  duration:1,
  delat:.5,
  stagger:.5,
  pin:true
})

tl.from(".box-content",{
    y:50,
    opacity:0,
    duration:1,
    delat:.5,
    stagger:.6, 
    pin:true,
    scrollTrigger:{
      scroller:"body",
      trigger:".box-img",
      opacity:0,
      scrub:1,
      start:"top 80%",
      end:"top -70%",
    }
})


gsap.from(".submit",{

  y:-100,
  opacity:0,
  duaration:1,
  delay:.5,
    scrollTrigger:{
      scroller:".ritesh",
      trigger:".submit",

    }
})

document.querySelector(".submit").addEventListener("clikck",function(){
  
})