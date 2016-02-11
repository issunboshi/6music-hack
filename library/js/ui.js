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
  
  
  $('.audio-block').draggable({
    
        stop: function() {

          var  target = $(".audio-target"),
               offset = target.offset(),
               width = target.width(),
               height = target.height(),
          
               centerX = (width / 2),
               centerY = (height / 2);
          
          console.log(offset);
          
          var item = $(this),
              item_height = item.height();
              
          
               //console.log("X position " + centerX);
               //console.log("Y position " + centerY);
               console.log("item height " + item_height);
               //console.log("item height /25 " + item_height/25);
          
           $(this).animate({ left: (centerX - (item_height/2)), top: (centerY/2) });
           //$(this).animate({ left: (centerX/2 - item_height), top: (centerY/2 - item_height) });
        } 
          
         //drag: function( event, ui ) {
         //  ui.position.left = centerX;
         //}  
      //}
  });
}); 