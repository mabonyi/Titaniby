$(function() {
  //Append the given text to the console
  window.writeToConsole = function(string) {
    $("#textiled").html(string);
  };
  
  //Attach an event handler to the button that will call our Ruby method
  $("#textilizer").click(function() {
    textilize($("#textile_text").attr("value"));
  });
  
  
  //UI Specific
  //-----------
  
  //Tabify main UI
  $("#tabs").tabs();
  
  //hover states on the button
	$('.button_link').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
});