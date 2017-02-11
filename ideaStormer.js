$(document).ready(function(){
	$('#wrapper').css({top:'50%',left:'50%',margin:'-'+($('#wrapper').height() / 2)+'px 0 0 -'+($('#wrapper').width() / 2)+'px'});
	$('centerNode').click(function(){
		$(this).fadeTo("slow", .25);
	});
	
	var input;
	var delim = [' ', '+', '(', ')', '*', '\\/', ':', '?', '-'];
	var tokens;
	$('button').on({'click' : function(){
		input = document.getElementById('query-Input').value;
		token = input.split(new RegExp('[' + delim.join('') + ']', 'g'));
		var querySum = [];
		for(i=0;i<tokens.length;i++){
			querySum += tokens[i]
			if(i!=tokens.length-1){
				querySum += '+'
			}
		}
		var originalQuery = "https://www.googleapis.com/customsearch/v1?q=" + querySum + "&tbm=nws&cx=010166564119629920893:idog8_peody";
		$.get(originalQuery, function(data){
			$('centerNode a').attr('href', data.items[0].link);
			$('centerNode img').attr('src', data.items[0].pagemap.cse_image[0].src);
			$('centerNode h3').html(data.items[0].title);
		});
		
	});
	
});