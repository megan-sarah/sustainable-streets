// /* eslint-env jquery, browser */
$(document).ready(function(){
    $("#info-button").click(function(){
      $("#info-text").show();
    });
    $("#close-icon").click(function(){
      $("#info-text").hide();
    });
  });