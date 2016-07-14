 $(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });

 $(document).one("scroll", function() {
      $('.posti').text(rakennaPosti("kö","säh","i.com","post"));
      $('.puhelin').text(rakennaPuh("34","1 05","44 50","+358 "));
    });

var rakennaPosti = function(username2, username1, domain2, domain1) {
  var posti = username1+username2+"@"+domain1+domain2;
  return posti;
}

var rakennaPuh = function(osa4, osa3, osa2, osa1) {
  var puh = osa1 + osa2 + osa3 + osa4;
  return puh;
}


WebFontConfig = {
  google: {
    families: ['Material Icons']
  }
};

(function(d) {
  var wf = d.createElement('script'), s = d.scripts[0];
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
  s.parentNode.insertBefore(wf, s);
})(document);


// $(window).resize(function() {
//    if(this.resizeTO) clearTimeout(this.resizeTO);
//    this.resizeTO = setTimeout(function() {
//       $(this).trigger('resizeEnd');
//    }, 500);
// });

// $(window).bind('resizeEnd', function() {
//    var url = $('#facebook-wrapper').data('refresh');
//    $('#facebook-wrapper').fadeOut("slow", function() {
//       $('#facebook-wrapper').load(url, { width: $('#facebook-feed').width() },
//       function() {
//          FB.XFBML.parse(document.getElementById("facebook-wrapper"),
//          function() {
//             $('#facebook-wrapper').fadeIn("slow");
//          });
//       })
//    });
// });