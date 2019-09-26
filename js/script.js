var click = 0;
$('nav').hide();
var element = document.getElementById('click');
element.onclick = function(){
	click++
	$('nav').show();
		if(click == 2){
			$('nav').hide();
			click = 0;
		}
	$(window).resize(function() { 
		if(document.body.clientWidth>750){
			$('nav').hide();
			click = 0
		}
	})
}




/*
$('.hiden').on('click',function(){
click++

$(window).resize(function() { 
	if(document.body.clientWidth>600){
		$('.hiden-menu').hide();
		click = 0
	}
})
	
	$('.hiden-menu').show();
	
	if(click == 2){
		$('.hiden-menu').hide();
		click = 0;
	}
	
	
})
*/