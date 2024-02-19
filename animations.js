function myInitCode() {
  gsap.registerPlugin(ScrollTrigger)    
  let heroVideo = document.querySelector(".hero-video-c")
  
  let header = document.querySelectorAll(".hero-main-header")
  let intHeader = document.querySelector(".hero-int-header")
let subHeader = document.querySelector(".hero-subheader")
let heroLineContainer = document.querySelector(".hero-line-c")
let heroLine = document.querySelector(".hero-white-line")
let navbar = document.querySelector(".nav-bar").children
  
let homepage = "https://oyler-family-dentistry.webflow.io/"
let meetTheTeam = "https://oyler-family-dentistry.webflow.io/"

//TO ADD A STARTING POINT IN A TIMELINE USE .ADD("_LABEL_") -> ANIMATION.PLAY("_LABEL_")

  function homepageIntro(){
    gsap.set(subHeader,{letterSpacing:"1em", y:150,skewY:8})
    gsap.set(heroLineContainer, {x:"-200%"})
    gsap.set(heroLineContainer, {x:"-200%"})
    let tl = gsap.timeline()
    tl.from(heroVideo, {
        duration: 3.75,
        scale: 1.55,
        ease: "power3.out",
    })
    tl.to(subHeader, {
    y: 0,
    skewY: 0,
    duration: 1,
    ease: "power4.out",
    stagger: {
      amount: 0.3
    }
  }, "-=2.25")
    tl.to(heroLineContainer, {
    duration: 3,
    x: "0%",
    ease: "power3.inOut",
  },"<-2.25")
    tl.to(heroLine, {
    duration: 3,
    x: "0%",
    ease: "power3.inOut",
  },"<+2")
    tl.to(subHeader, {
    duration: 1.5,
    letterSpacing: "0.25em",
    ease: "power3.inOut",
  }, "<+1")
    tl.from(header, {
    duration: 2,
    y: "150%",
    ease: "power3.inOut",
    skewY: 7,
    stagger: {
      amount: 0.25
    }},"<-.40")
    tl.from(navbar, {
    duration: 1.8,
    y: "-200%",
    ease: "power3.inOut",
    stagger: {
      amount: 0.5
    }},"<")

    return tl;
  }
function internalIntro(){
    gsap.set(heroLineContainer, {x:"200%"})
    
    let tl = gsap.timeline()
    tl.to(heroLineContainer, {
        x: "0%",
    })
    tl.to(heroLine, {
        duration: 3,
        x: "0%",
        ease: "power3.inOut",
    }, "<-0.05")
    tl.from(intHeader, {
        duration: 2,
        y: "155%",
        ease: "power3.inOut",
        skewY: 7,
    }, "<-.75")
    tl.from(navbar, {
        duration: 1.8,
        y: "-200%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.5
        }
    }, "<.5")

    return tl;
}
function heroLineAnimation(){
  let duration = 5;
  let pause = 1
  let tl = gsap.timeline({repeat:2})

  tl.to(heroLine,{
    delay: pause,
    x:"150%",
    duration:duration,
    ease: "power3.inOut",
  })

  tl.from(heroLine,{
    x:"-150%",
    duration:duration,
    ease: "power3.inOut",
  }, 4 )
  return tl;
}

var master = gsap.timeline()

if(window.location.href == homepage){
    console.log("yes")
    master.add(homepageIntro())
    master.add(heroLineAnimation())
} else {
    console.log("no")
    master.add(internalIntro())
    master.add(heroLineAnimation())
}

//SENTENCES ANIMATION
function sentencesAnimation(){

  let sections = []
  let sentences = []
    
  let firstS = document.querySelectorAll(".first-section-content-split-c")
  let firstSen = document.querySelectorAll(".first-section-content-split-c .animate-p")
  sections.push(firstS)
  sentences.push(firstSen)

  let secondS = document.querySelector(".second-section-content-split-c")
  let secondSen = document.querySelectorAll(".second-section-content-split-c .animate-p")
  sections.push(secondS)
  sentences.push(secondSen)

  let helpS = document.querySelector(".help-bottom-content-split-c")
  let helpSen = document.querySelectorAll(".help-bottom-content-split-c .animate-p")
  sections.push(helpS)
  sentences.push(helpSen)

  let hospS = document.querySelector(".hosp-content-c")
  let hospSen = document.querySelectorAll(".hosp-content-c .animate-p")
  sections.push(hospS)
  sentences.push(hospSen)

  let quoteS = document.querySelector(".quote-content-c")
  let quoteSen = document.querySelectorAll(".quote-content-c .animate-p")
  sections.push(quoteS)
  sentences.push(quoteSen)
  
  let leftInfoS = document.querySelectorAll(".doctor-info-left-content-c")
  let leftInfoSen = document.querySelectorAll(".doctor-info-left-content-c .animate-p")
  sections.push(leftInfoS)
  sentences.push(leftInfoSen)
  
  let rightInfoS = document.querySelectorAll(".doctor-info-right-content-c")
  let rightInfoSen = document.querySelectorAll(".doctor-info-right-content-c .animate-p")
  sections.push(rightInfoS)
  sentences.push(rightInfoSen)

  let bottomInfoS = document.querySelector(".doctor-info-bottom-content-c")
  let bottomInfoSen = document.querySelectorAll(".doctor-info-bottom-content-c .animate-p")
  sections.push(bottomInfoS)
  sentences.push(bottomInfoSen)
  
  let larryInfoS = document.querySelector(".heart-bottom-content-split-c-larry")
  let larryInfoSen = document.querySelectorAll(".heart-bottom-content-split-c-larry .animate-p")
  sections.push(larryInfoS)
  sentences.push(larryInfoSen)
  
  let larryleftInfoS = document.querySelector(".doctor-info-left-content-c-larry")
  let larryleftInfoSen = document.querySelectorAll(".doctor-info-left-content-c-larry .animate-p")
  sections.push(larryleftInfoS)
  sentences.push(larryleftInfoSen)
  
  let larryrightInfoS = document.querySelector(".doctor-info-right-content-c-larry")
  let larryrightInfoSen = document.querySelectorAll(".doctor-info-right-content-c-larry .animate-p")
  sections.push(larryrightInfoS)
  sentences.push(larryrightInfoSen)
  
  let larrybottomInfoS = document.querySelector(".doctor-info-bottom-content-c-larry")
  let larrybottomInfoSen = document.querySelectorAll(".doctor-info-bottom-content-c-larry .animate-p")
  sections.push(larrybottomInfoS)
  sentences.push(larrybottomInfoSen)
  
  let josephInfoS = document.querySelector(".heart-bottom-content-split-c-joseph")
  let josephInfoSen = document.querySelectorAll(".heart-bottom-content-split-c-joseph .animate-p")
  sections.push(josephInfoS)
  sentences.push(josephInfoSen)
  
  let josephbottomInfoS = document.querySelector(".doctor-info-bottom-content-c-jospeh")
  let josephbottomInfoSen = document.querySelectorAll(".doctor-info-bottom-content-c-jospeh .animate-p")
  sections.push(josephbottomInfoS)
  sentences.push(josephbottomInfoSen)

  function scrollingWord(tri, sen){
    const sentence = gsap.utils.toArray(sen);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:tri,
        toggleActions: "play reverse play reverse",
        start: "top 85%",
        end: "bottom 55%",
        markers: false,
        scrub: 2
      }
    });
    tl.to(sen, { 
      stagger: 0.5, opacity: 1 
    })
      .to(sen,{
        stagger: 0.75,
      },0.5);
    return tl;
  }

  for(let i=0; i < sections.length; i++) {
    scrollingWord(sections[i], sentences[i])
  };

}
sentencesAnimation()
  
//DOCTOR HOVER BTN ANIMATION
function hoverDocBtn(docBtn, docImg){
      gsap.set(docImg, {
          scale: 0.5,
      })
      docBtn.addEventListener("mouseenter", function(){
          gsap.to(docImg, {
              ease: "power1.inOut",
              opacity: 100,
              scale: 1,
          })
      })
      docBtn.addEventListener("mouseleave", function(){
          gsap.to(docImg, {
              ease: "power1.inOut",
              opacity: 0,
              scale: 0.5,
          })
      })
  }
function doctorLinkBtn(){
    let brianBtn = document.querySelector(".dr-brian-link")
    let brianImg = document.querySelector(".brian-img-link")

    let larryBtn = document.querySelector(".dr-larry-link")
    let larryImg = document.querySelector(".larry-img-link")

    let josephBtn = document.querySelector(".dr-joseph-link")
    let josephImg = document.querySelector(".joseph-img-link")
  
    hoverDocBtn(brianBtn, brianImg)
    hoverDocBtn(larryBtn, larryImg)
    hoverDocBtn(josephBtn, josephImg)
}

if( window.location.href == meetTheTeam){
  doctorLinkBtn()
} 


//HOVER BUTTON ANIMATION
let btn = document.querySelectorAll(".button")
btn.forEach((b) => {
  // function hoverInBtn(tL, bL){
  let tL = b.querySelector(".overflow-hidden > .button-line")
  let bL = b.querySelector(".overflow-hidden > .under-btn")
  let hoverTL = gsap.timeline()
  hoverTL.pause();  
  hoverTL.to(
    tL, {
      x:"-100%",
      duration: .75,
      ease: "power1.out",
    })

  hoverTL.to(
    bL, {
      x:"60%",
      duration: .75,
      ease: "power1.out",
    }, "<")

  b.addEventListener("mouseover", () => {
    console.log("in")
    hoverTL.play()
  })

  b.addEventListener("mouseleave", () => {
    // let topLine = b.querySelector(".overflow-hidden > .button-line")
    // let bottomLine = b.querySelector(".overflow-hidden > .under-btn")
    console.log("out")
    hoverTL.reverse()
  })
})
btn.forEach((b) => {
  // function hoverInBtn(tL, bL){
  let tL = b.querySelector(".overflow-hidden > .contact-button-black-line")
  let bL = b.querySelector(".overflow-hidden > .under-btn")
  let hoverTL = gsap.timeline()
  hoverTL.pause();
  hoverTL.to(
    tL, {
      x:"-100%",
      duration: .75,
      ease: "power1.out",
    })

  hoverTL.to(
    bL, {
      x:"60%",
      duration: .75,
      ease: "power1.out",
    }, "<")

  b.addEventListener("mouseover", () => {
    hoverTL.play()
  })

  b.addEventListener("mouseleave", () => {
    hoverTL.reverse()
  })
})
}

function vimeoCode(){

// THIS IS THE FUNCTION THAT GOING TO CLICK THAT BOX WITH THE ANIMATION IN WEBFLOW
let animateButton = ()=>{
  document.querySelector(".animation-play-tri").click()
}

// MAKE SURE THE VIMEO IFRAME HAS THE SAME ID AS BEFORE
let iframe = document.querySelector("#vimeo-iframe")
var player = new Vimeo.Player(iframe);
player.on("pause", ()=>{
  // WHEN THE VIDEO IS PAUSE THE ANIMATION IS GOING TO PLAY
  //THANKS TO WEBFLOW IT KEEP TRACK IF YOU HAVE CLICK IT BEFORE OR NOT
  animateButton();

})
player.on("play", (data)=>{
  // WHEN THE VIDEO START OR IS UNPASE THE ANIMATION IS GOING TO PLAY
  animateButton();
})
player.on("timeupdate", (data) =>{
  let time = (data.percent) * 100
  progressBar(time)
})
player.on('ended', () => {
  animateButton();
  progressBarEnd()
});

function progressBar(t){
  let fakeBar = document.querySelector(".fake-bar")
  let bar = document.querySelector(".progress-bar")
  console.log(t);
  if( t < 0.5) {
    console.log("yes 0")
    gsap.to(fakeBar, {x:"-100%"})
  }
  gsap.to (bar, {
    xPercent:t ,
  })
  return tl
}
function progressBarEnd(){
  let bar = document.querySelector(".progress-bar")
  let tl = gsap.timeline()

  tl.fromTo (bar, {
    xPercent:100,
  }, {
    xPercent:25
  })
  return tl
}


//THIS IS THE FUNCTION THE HANDLE PLAY
let handleOnPlay = async ()=>{
  let isPause = await player.getPaused()
  if(isPause){
    await player.play()
  }else {
    await player.pause()
  }
}
//THIS IS THE FUNCTION THAT HANDLES THE CAPTION
let handleCaption = async ()=>{
  let captions = await player.getTextTracks()
  if(captions.length > 0){
    if(captions[0].mode === "disabled"){
      await player.enableTextTrack(captions[0].language, captions[0].kind)
    } else {
      await player.disableTextTrack()
    } 
  }
}


// THIS IS THE CONTAINER THAT YOU WANT TO CLICKEBLE TO PLAY THE VIDEO
let containerOfVideo = document.querySelectorAll(".player-box")
console.log(containerOfVideo)
containerOfVideo.forEach((c) => {
  c.addEventListener("click", (e)=>{
    handleOnPlay()
  })
})



//IF YOU WANT TO ADD CAPTION MAKE SURE TO ADD A SVG WITH DIV TO REPRESENT THE CAPTION ICON AND ADD THE ID OF CAPTION TO THE DIV BLOCK
let caption = document.querySelector("#caption")
caption.addEventListener("click", (e)=>{
  handleCaption()
})

// VOLUME CONTROL
const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".value")
let fullVolume = document.querySelector("#volume-full-trigger");
let halfVolume = document.querySelector("#volume-half-trigger");
let noVolume = document.querySelector("#volume-mute-trigger");
sliderEl.addEventListener("input", async (event) => {
  const tempSliderValue = event.target.value; 
  let progress = (tempSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, var(--range-circle) ${progress}%, #ccc ${progress}%)`;

  let volume = progress / 100;
  await player.setVolume(volume)
  console.log(progress)
  progress = Math.floor(progress)
  if(0 >= progress){
    // ANIMATE LOTTIE TO MUTE VOLUME
    noVolume.click();
  }else if(progress > 50){
    // ANIMATE LOTTIE TO FULL VOLUME
    fullVolume.click();
  }else if (progress < 50){
    // ANIMATE LOTTIE TO HALF VOLUME
    halfVolume.click();
  }
})
}


if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    myInitCode();
    vimeoCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        myInitCode();
        vimeoCode();
    });
}



