
$( function() {    
  $( ".ui-widget-content" ).draggable({ revert: "invalid", appendTo: "#droppable",
  helper: "clone"  });

  $( ".ui-widget-header" ).droppable({

    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this ).find(".placeholder").remove();
      var image =$(".ui.draggable")
      $("<imag />").image.src.appendTo(this);
        
    }
  });
} );


 
 