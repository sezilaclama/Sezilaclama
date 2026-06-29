document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".kart, .yorum, .stat-box, .hero");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";
        observer.observe(item);
    });

});



document.addEventListener("DOMContentLoaded",()=>{
 const audio=new (window.AudioContext||window.webkitAudioContext)();
 function beep(){
   const o=audio.createOscillator(),g=audio.createGain();
   o.type="square";o.frequency.value=700;
   o.connect(g);g.connect(audio.destination);
   g.gain.value=0.03;o.start();
   g.gain.exponentialRampToValueAtTime(0.0001,audio.currentTime+0.12);
   o.stop(audio.currentTime+0.12);
 }
 document.querySelectorAll("img").forEach(img=>{
   img.style.cursor="pointer";
   img.addEventListener("click",()=>{
      beep();
      img.classList.remove("bug-anim");
      void img.offsetWidth;
      img.classList.add("bug-anim");
   });
 });
});
