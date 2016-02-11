// Snapping back to start location
//$('.audio-block').draggable({ revert: true });

//Adding dropable class
$(function() {
  $('.audio-block').draggable({snap: ".audio-target" });
  $( ".audio-target" ).droppable({
    drop: function( event, ui ) {
      $( this ).addClass( "target__image--dropped" );
    }  
  });  
  
    $( ".audio-dock" ).droppable({
      drop: function( event, ui ) {
        $(".audio-target").removeClass( "target__image--dropped"); 
      }  
    }); 
  
  	var item   = '.audio-block',
  	    target = ".audio-target-container", 
		width = $(target).width(),
		height = $(target).height(),
		top = $(target).offset().top,
		left = $(target).offset().left,
		
		cntrLeft = (width / 2) - ($(item).width() / 2) + left,
		cntrTop = (height / 2) - ($(item).height() / 2) + top;

		console.log(cntrLeft);

  $( item ).draggable({
    
        stop: function() {
           	
           $( item ).animate({ top: cntrTop + "px", left: cntrLeft + "px" });
           //$(this).animate({ left: (centerX - (item_height/2)), top: (centerY/2) });
           //$(this).animate({ left: (centerX/2 - item_height), top: (centerY/2 - item_height) });
        } 
          
         //drag: function( event, ui ) {
         //  ui.position.left = centerX;
         //}  
      //}
  });
}); 