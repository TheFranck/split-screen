$(function() {

    // multiScroll

    var windowWidth = $(window).innerWidth();

    if(windowWidth > 767 ) {
        
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

    } else {
        var msLeft = $('.ms-left').html(); // On stocke la ce que contient la div avec la classe ms-left dans une variable --> .html veut dire tout le code html 
        $('.ms-left').remove(); // Puis on enleve la div avec la class ms-left 
        $('#multiscroll').append(msLeft); // puis on remets le contenu qui etait stocké 

        var msRight = $('.ms-right').html();
        $('.ms-right').remove();
        $('#multiscroll').append(msRight);

        // on replace les sections dans le bon ordre
        $('.ms-section--1b').insertBefore('.ms-section--1a');
        $('.ms-section--3a').insertAfter('.ms-section--3b');

        // On rajoute des Id(s) pour faire une ancre
        $('.ms-section--1b').attr('id','home');
        $('.ms-section--2a').attr('id','cupcake');
        $('.ms-section--3b').attr('id','cake');

        $('#menu li a').click(function(e){ // Lorsqu'on clique sur le lien <a> 
            $('#menu li').removeClass('active'); // on enlève la class active sur le <li>
            $(this).parent().addClass('active'); // puis sur le lien où on a cliqué on ajoute la classe sur le <li>

            var href = $(this).attr('href'); // On stocke le href="" du lien dans la variable 
             
            $('html, body').animate({ scrollTop : $(href).offset().top - 56}, 900, function(){
                $('.navbar-collapse').collapse('hide');
            });
            e.preventDefault(); // J'annule le lien.

        });
    }



    

});
