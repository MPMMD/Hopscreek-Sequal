// Burger menu https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
 function burgerFunction() {
     var x = document.querySelector('#dropdown');
     if (x.style.display === "block") {
       x.style.display = "none";
     } else {
       x.style.display = "block";
     }
   }

  // Fade in  https://stackoverflow.com/questions/11679567/using-css-for-a-fade-in-effect-on-page-load - metode 3
   $("header").delay(1000).animate({"opacity": "1"}, 500);
   $("section").delay(1000).animate({"opacity": "1"}, 500);
   $("div").delay(1000).animate({"opacity": "1"}, 1600);  

  // toggle  https://codepen.io/fahim04blue/pen/KKNvOZe
   const julibtn = document.querySelector('#juli');
   const junibtn = document.querySelector('#juni');
   const juni = document.querySelectorAll('.ticket-juni')
   const juli = document.querySelectorAll('.ticket-juli')


   julibtn.addEventListener("click", function(){
    juni.forEach(junimonth=>{
      junimonth.style.display = "none";
    })   
    juli.forEach(julimonth=>{
      julimonth.style.display = "block";
    })   
   });

   junibtn.addEventListener("click", function(){
    juni.forEach(junimonth=>{
      junimonth.style.display = "block";
    })   
    juli.forEach(julimonth=>{
      julimonth.style.display = "none";
    })         
 });