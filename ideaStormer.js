$(document).ready(function(){
	$('#firstNode').position({of: $(window)});
	$('.Node').draggable();
	$('#firstNode').css("visibility","visible");
	
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
		var originalQuery = "https://www.googleapis.com/customsearch/v1?q="+querySum+"&tbm=nws&cx=010166564119629920893:idog8_peody&key=AIzaSyCDeD15Z4envmo17tRmHPSMNgZo70BiJuo";
		$.get(originalQuery, function(data){
			var xCor = 0;
			var yCor = 0;
			var secondQuery = "https://concept.research.microsoft.com/api/Concept/ScoreByProb?instance="+ querySum +"&topK=1&api_key=7tfeJo12IeaAs1FxSufInwVYyfdQmbj9"
			
			
			$('#firstNode a').attr('href', data.items[0].link);
			$('#firstNode img').attr('src', data.items[0].pagemap.cse_image[0].src);
			$('#firstNode img').addClass("img-fluid");
			$('#firstNode img').addClass("img-circle");
			$('#firstNode').css({'top': xCor, 'left':yCor});
			
			if(data.items[1]){
				$('#1 a').attr('href', data.items[1].link);
				$('#1 img').attr('src', data.items[1].pagemap.cse_image[0].src);
				$('#1 img').css("visibility","visible");
				$('#1 img').addClass("img-fluid");
				$('#1 img').addClass("img-circle");
				$('#1').css({'top': xCor, 'left': yCor + 200});
			}
			
			if(data.items[2]){
			$('#2 a').attr('href', data.items[2].link);
			$('#2 img').attr('src', data.items[2].pagemap.cse_image[0].src);
			$('#2 img').css("visibility","visible");
			$('#2 img').addClass("img-fluid");
			$('#2 img').addClass("img-circle");
			$('#2').css({'top': xCor - 500, 'left':yCor + 200});
			}
			
			if(data.items[3]){
			$('#3 a').attr('href', data.items[3].link);
			$('#3 img').attr('src', data.items[3].pagemap.cse_image[0].src);
			$('#3').css("visibility","visible");
			$('#3 img').addClass("img-fluid");
			$('#3 img').addClass("img-circle");
			$('#3').css({'top': xCor - 500, 'left': yCor - 500});
			}
			
			if(data.items[4]){
			$('#4 a').attr('href', data.items[4].link);
			$('#4 img').attr('src', data.items[4].pagemap.cse_image[0].src);
			$('#4').css("visibility","visible");
			$('#4 img').addClass("img-fluid");
			$('#4 img').addClass("img-circle");
			$('#4').css({'top': xCor - 550, 'left':yCor - 75});
			}
			
			if(data.items[5]){
			$('#5 a').attr('href', data.items[5].link);
			$('#5 img').attr('src', data.items[5].pagemap.cse_image[0].src);
			$('#5').css("visibility","visible");
			$('#5 img').addClass("img-fluid");
			$('#5 img').addClass("img-circle");
			$('#5').css({'top': xCor - 650, 'left': yCor + 400});
			}
			
			if(data.items[6]){
			$('#6 a').attr('href', data.items[6].link);
			$('#6 img').attr('src', data.items[6].pagemap.cse_image[0].src);
			$('#6').css("visibility","visible");
			$('#6 img').addClass("img-fluid");
			$('#6 img').addClass("img-circle");
			$('#6').css({'top': xCor - 850, 'left': yCor - 450});
			}
			
			if(data.items[7]){
			$('#7 a').attr('href', data.items[7].link);
			$('#7 img').attr('src', data.items[7].pagemap.cse_image[0].src);
			$('#7').css("visibility","visible");
			$('#7 img').addClass("img-fluid");
			$('#7 img').addClass("img-circle");
			$('#7').css({'top': xCor - 1450, 'left': yCor - 600});
			}
			
			if(data.items[8]){
			$('#8 a').attr('href', data.items[8].link);
			$('#8 img').attr('src', data.items[8].pagemap.cse_image[0].src);
			$('#8').css("visibility","visible");
			$('#8 img').addClass("img-fluid");
			$('#8 img').addClass("img-circle");
			$('#8').css({'top': xCor - 1200, 'left': yCor - 200});
			}
		});
		
	}});
	
});