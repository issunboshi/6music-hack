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
  
  	var item   = '.audio-dock--left .audio-dock-cell .audio-block', 
  		item_r  = '.audio-dock--right .audio-dock-cell .audio-block', 
  	    target = ".audio-target-container",
  	    item_size = 75, 
		top = (780/2 - (75/2)),
		left = (1440/2 - (75/2)),
		top1 	= top - item_size,
        left1	= left - item_size; 

    $(item).draggable({   
    	stop: function() {
    		$( this ).animate({ top: (top/4) + "px", left: left + "px" });
    		$(body).trigger('audio-selected', ["bass"]);
 		}  
 	}); 

 	$(item_r).draggable({   
    	stop: function() {
    		$( this ).animate({ top: (top/4) + "px", right: left + "px" });
    		$(body).trigger('audio-selected', ["bass"]);
 		}  
 	});

  	
}); 