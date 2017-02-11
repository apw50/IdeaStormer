$(document).ready(function(){
	$('#firstNode').position({of: $(window)});
	$('.Node').draggable();
	
	$('button').click(function(){
		
		$('.Node').after('<div class="Node"></div>');
		$('.Node').draggable();
		
		
		
	});
	
	
	
	var input;
	var delim = [' ', '+', '(', ')', '*', '\\/', ':', '?', '-'];
	var tokens;
	$('button').on({'click' : function(){
		input = document.getElementById('query-Input').value;
		token = input.split(new RegExp('[' + delim.join('') + ']', 'g'));
		var querySum = [];
		for(i=0;i<token.length;i++){
			querySum += token[i]
			if(i!=token.length-1){
				querySum += '+'
			}
		}
		var originalQuery = 'https://cse.google.com/cse.js?cx=010166564119629920893:idog8_peody';
		$.get(originalQuery, function(data){
			$('#firstNode p').html(data.items[0].snippet);
		});
		
	}});
	
});