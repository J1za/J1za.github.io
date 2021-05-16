$( document ).ready(function(){
    $(".half__one, .mobile-download").hover(function(){	
	    $(".mobile__phone, .mobile-sticker").css( "margin-left", "50px")
		$(".footer__copyright").css( "padding-left", "50px")
        $(".mobile__phone, .mobile-sticker, .footer__copyright").css("transition", ".8s")
		
	    }, function(){ 	
	    $(".mobile__phone, .mobile-sticker").css( "margin", "0" )
		$(".footer__copyright").css( "padding", "0")
        $(".mobile__phone, .mobile-sticker, .footer__copyright").css( "transition", "1s")
	});
     $(".half__three, .mobile-qr, .footer__link").hover(function(){	
	    $(".mobile__phone, .mobile-sticker").css( "margin-right", "50px")
		$(".footer__copyright").css( "padding-right", "50px")
        $(".mobile__phone, .mobile-sticker, .footer__copyright").css( "transition", "1s")
	    }, function(){ 	
	    $(".mobile__phone, .mobile-sticker").css( "margin", "0" )
		$(".footer__copyright").css( "padding", "0")
        $(".mobile__phone, .mobile-sticker, .footer__copyright").css( "transition", "1s")
	});
	
});
