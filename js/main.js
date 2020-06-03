new WOW().init();
$(document).ready(function(){
  $(' .navs nav a').click(function(){

 $(this).addClass('act').siblings().removeClass('act');


});
$(' .toggle-nav nav a').click(function(){

$(this).addClass('act').siblings().removeClass('act');


});
$('.list').click(function(){

$('.toggle-nav').slideToggle();

});


$('.timer').countTo();
var swiper = new Swiper('.swiper-container', {
spaceBetween: 30,
pagination: {
el: '.swiper-pagination',
clickable: true,
},
});


$(window).scroll(function(){

    if($(this).scrollTop() > 250){
      $('.navbar-1').addClass('down');
      $('.gotop .got').fadeIn();
    }else{
     $('.navbar-1').removeClass('down');
     $('.gotop .got').fadeOut();
    };

});


});
function countDown(){
  var now = new Date();
  var eventDate = new Date(2019,12,25);
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTime;
  var s = Math.floor(remTime/1000);
  var m = Math.floor(s/60);
  var h = Math.floor(m/60);
  var d = Math.floor(h/24);
  h %= 24;
  m %= 60;
  s %= 60;
  h = ( h < 10 ) ? "0" + h : h ;
  m = ( m < 10 ) ? "0" + m : m ;
  s = ( s < 10 ) ? "0" + s : s ;
  document.getElementById('days').innerHTML = d;
  document.getElementById('hours').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('second').innerHTML = s;


  document.getElementById('days-1').innerHTML = d;
  document.getElementById('hours-1').innerHTML = h;
  document.getElementById('minutes-1').innerHTML = m;
  document.getElementById('second-1').innerHTML = s;


  document.getElementById('days-2').innerHTML = d;
  document.getElementById('hours-2').innerHTML = h;
  document.getElementById('minutes-2').innerHTML = m;
  document.getElementById('second-2').innerHTML = s;
  setTimeout(countDown,1000);

}
countDown();


