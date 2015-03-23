jQuery(document).ready(function(){
	runEffect();
	$("#tabs").tabs();
	timeline();
	$("#timeline").click(timeline);
	 $( "#expand" ).click(function() {
      runEffect();
    });
	

	function timeline(){
		$.getJSON( "timeline.json", function(data) {
			var items=[];
    		items = data.items;
  			for(var i=0;i<items.length;i+=1){
    			$("#tabs-1").append('<div class="container"><div class="row"><div class="col-md-8"><section class="comment-list"><article class="row">'+
    							'<div class="col-md-2 col-sm-2 hidden-xs"><figure class="thumbnail"><img class="img-responsive" src="' + items[i].avatar+'"'+
    							'<figcaption class="text-center">'+ items[i].autor +'</figcaption></figure>'+
            					'</div><div class="col-md-10 col-sm-10"><div class="panel panel-default arrow left"><div class="panel-body">'+
                  				'<header class="text-left"><div class="comment-user"><i class="fa fa-envelope"></i>'+ " " + items[i].titulo+'</div></header>'+
                  				'<p class="text-right"><a href="#" class="btn btn-default btn-sm" id="expand"><i class="fa fa-reply"></i> Read More</a></p>'+
                  				'<div class="toggler"><div id="effect" class="ui-widget-content ui-corner-all"><p>'+items[i].contenido+'</p></div></div></div>'+
                  				'</div></div></article></section></div></div></div></div>');
  			};
		});
	}

	function runEffect() {
      	$( "#effect" ).toggle("blind", 500 );
    };

});

	


	/*'<div class="container"><div class="row"><div class="col-md-8"><section class="comment-list"><article class="row">'+
    							'<div class="col-md-2 col-sm-2 hidden-xs"><figure class="thumbnail"><img class="img-responsive" src="http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg" />'+
    							'<figcaption class="text-center">username</figcaption></figure>'+
            					'</div><div class="col-md-10 col-sm-10"><div class="panel panel-default arrow left"><div class="panel-body">'+
                  				'<header class="text-left"><div class="comment-user"><i class="fa fa-user"></i> That Guy</div></header>'+
                  				'<p class="text-right"><a href="#" class="btn btn-default btn-sm" id="expand"><i class="fa fa-reply"></i> Read More</a></p>'+
                  				'<div class="toggler"><div id="effect" class="ui-widget-content ui-corner-all"><p>pepeee</p></div></div></div>'+
                  				'</div></div></article></section></div></div></div></div>'*/