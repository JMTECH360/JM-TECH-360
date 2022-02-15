$('body').append('<div style="" id="loader"><div></div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 10000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loader" ).fadeOut(2000, function() {
      // fadeOut complete. Remove the loading div
      $( "#loader" ).remove(); //makes page more lightweight 
  });  
}