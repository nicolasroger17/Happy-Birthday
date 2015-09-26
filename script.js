(function($) {

  // var words = $("p").text().split(" ");
  // $("p").empty();
  // $.each(words, function(i, v) {
  //     $("p").append($("<span>").text(v));
  // });
  colors = ["rgb(214, 41, 51)", "rgb(241, 194, 57)", "rgb(243, 110, 47)", "rgb(21, 154, 82)", "rgb(66, 149, 214)", "rgb(127, 84, 164)"];
  $("p").each(function() {
    var p = $(this);
    words = p.text().split(" ");
    p.empty();
    $.each(words, function(i, v) {
        p.append("<span class='word'>" + v + "</span> ");
    });
    $(this).find(".word").each(function() {
      var t = $(this).html();
      $(this).html(t.replace(/([\w,\.])/g, "<span class='char'>$1</span>"));
    });
  });

  tl = new TimelineMax();
  tl.paused(!tl.paused());

  animation();

  function animation() {
    tl.staggerTo($(".body"), 1, {opacity: 1}, 0);
    tl.staggerFrom($(".body"), 2, {backgroundPosition: "center 600%"}, 0);

    tl.staggerFrom($(".container"), 1, {opacity: 0, rotationX: 90}, 0.5);
    tl.staggerFrom($(".c"), 1, {opacity: 0}, 0.02);

    $("p").each(function () {
      var p = $(this);
      tl.staggerTo(p.find(".char"), 0.1, {autoAlpha:1, rotation:0}, 0.02);
      p.find(".char").each(function () {
        tl.staggerTo($(this), 0.15, {color: colors[Math.floor((Math.random() * colors.length))], scale: 0.9, textShadow: "none"}, 0.1);
      });
    })
  }

  tl.paused(!tl.paused());
  document.getElementById('audio').play();

})(jQuery);
