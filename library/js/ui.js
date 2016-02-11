// Snapping back to start location
//$('.item').draggable({ revert: true });

//Adding dropable class
$(function() {
  $('.item').draggable({snap: ".target" });
  $( ".target" ).droppable({
    drop: function( event, ui ) {
      $( this ).addClass( "target__image--dropped" );
    }  
  });  
  
    $( ".dock" ).droppable({
      drop: function( event, ui ) {
        $(".target").removeClass( "target__image--dropped"); 
      }  
    }); 
  
  
  $('.item').draggable({
    
        stop: function() {

          var  target = $(".target"),
               offset = target.offset(),
               width = target.width(),
               height = target.height(),
          
               centerX = offset.left + (width / 2),
               centerY = offset.top + (height / 2);
          
          console.log(width);
          
          var item = $(this),
              item_height = target.height();
              
          
               console.log("X position " + centerX);
               console.log("Y position " + centerY);
               console.log("item height " + item_height);
               console.log("item height /25 " + item_height/25);
          
           $(this).animate({ left: centerX - (item_height/25), top: (item_height/2) });
        } 
          
         //drag: function( event, ui ) {
         //  ui.position.left = centerX;
         //}  
      //}
  });
}); 