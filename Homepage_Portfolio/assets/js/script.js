document.addEventListener("DOMContentLoaded", function (){
    const progressbarinner=document.querySelector('.progress-bar-inner');
    window.addEventListener('scroll', function (){
        let h=document.documentElement;
        let st=h.scrollTop || this.document.body.scrollTop;
        let sh=h.scrollHeight || this.document.body.scrollHeight;
 
        let percent=st/(sh-h.clientHeight)* 100;
        let roundedPercent=Math.round(percent);
 
        progressbarinner.style.width=roundedPercent + "%";
        progressbarinner.innerText=roundedPercent+ "%";
    }); 
 })
 
 $(document).ready(function(){
     let affect=$("#animate").children();
 $(window).on("load",function(){
     // $("#animation1").fadeIn(3000);
     // $("#animation2").fadeIn(6000);
     // $("#animation3").fadeIn(9000);
 
 
 $(affect).each(function(i) {
     loopInfinitely($(this));
 });
 
 function loopInfinitely(elem) {
     var rand = 1 + Math.floor(Math.random() * 7) * 1000;//max of random 7 seconds
     setTimeout(function() {
         elem.fadeIn(rand).delay(300).fadeOut(rand);
         loopInfinitely(elem);
     }, rand);
 }
 })
 
 })//end ducument ready function/