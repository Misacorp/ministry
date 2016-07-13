 $(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
    });

 $(document).one("scroll", function() {
      $('#posti').text(rakennaPosti("kö","säh","i.com","post"));
      $('#puhelin').text(rakennaPuh("34","1 05","44 50","+358 "));
    });

var rakennaPosti = function(username2, username1, domain2, domain1) {
  var posti = username1+username2+"@"+domain1+domain2;
  return posti;
}

var rakennaPuh = function(osa4, osa3, osa2, osa1) {
  var puh = osa1 + osa2 + osa3 + osa4;
  return puh;
}