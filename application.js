$(document).ready(function() {
  $(".btn").click(function(event) {
    $.getJSON('https://raw.githubusercontent.com/dannytpeck/recursion-project/master/quotes.json', function(jd) {
      var quoteNum = Math.floor((Math.random() * 3) + 1);
      $('#quote').html('<p>' + jd[quoteNum] + '</p>');
    });
  });
});