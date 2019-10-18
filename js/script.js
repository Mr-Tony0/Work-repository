var click = 0;
$('nav').hide();
if(document.body.clientWidth<750){
	$('.logo__img').addClass('indentedZero');
}
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
var click2 = 0;
var element2 = document.getElementById('click2');
element2.onclick = function(){
	click2++
	$('nav').show();
		if(click2 == 2){
			$('nav').hide();
			click2 = 0;
		}
	$(window).resize(function() { 
		if(document.body.clientWidth>750){
			$('nav').hide();
			click2 = 0
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