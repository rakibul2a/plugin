var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true,      
    callback:     function(box) {
      
      
    },
    scrollContainer: null,    
    resetAnimation: true,     
  }
);
wow.init();
const counters = document.querySelectorAll('.counter');
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 500; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}
// jq---------------
$(document).ready(function(){
  // 1
  $('.counter').counterUp({
    delay: 10,
    time: 1000
   });

  // 2
  $("#countdown").countdown360({
  radius      : 60.5,
  seconds     : 60,
  strokeWidth : 15,
  fillStyle   : '#faf7f5',
  strokeStyle : '#38f276',
  fontSize    : 50,
  fontColor   : '#f25a38',
  autostart: false,
  onComplete  : function () { console.log('completed') }
  }).start()

  // 3
  $(".num").numScroll({
     number: 123456,
     time: 1500,
     delay: 0,
     symbol:true,
     fromZero:true,
  });

  // 4
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step:function() {
        $this.text(Math.floor(this.countNum));
      },
      complete:function() {
        $this.text(this.countNum);
      }
    });
  });

  // 5
  $('.count-num').rCounter({
    duration: 30
  });



  

});