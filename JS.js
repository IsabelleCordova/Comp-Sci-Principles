$(document).ready(function(){
alert("script.js is working!");
});

$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
  })