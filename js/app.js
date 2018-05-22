$(function() {

    // multiScroll
    $('#multiscroll').multiscroll({
        navigation :true,
        anchors: ['home', "cupcake", 'cake' ],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
			//using index
			if(index == '2'){
				$('.navbar').addClass('menu-cupcake');
			} else {
                $('.navbar').removeClass('menu-cupcake');
            }
            if(index == '3'){
				$('.navbar').addClass('menu-cake');
			} else {
                $('.navbar').removeClass('menu-cake');
            }
		} 
    });

    

});
