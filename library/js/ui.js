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
  	    item_size = 75, 
		top = (780/2 - (75/2)),
		left = (1440/2 - (75/2)),

		top1 	= top - item_size,
        left1	= left - item_size; 

    stop: function() {
    	$( this ).animate({ top: top + "px", left: left + "px" });
    	$(body).trigger('audio-selected', ["bass"]);
 	}  

  	
}); 