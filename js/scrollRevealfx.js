window.sr = ScrollReveal();

    sr.reveal('.navbar', {  //dentro de la comilla '' va la etiqueta que tendrá la animacion
        duration: 1000, //duración de la animacion
        origin: 'bottom', //hacia adonde va
        distance: '-100px'   //distancia desde donde aparece al contrario del origin 
    });

    sr.reveal('h3', {
        duration: 3000,
        origin: 'left',
        distance: '-100px'
    });
    // sr.reveal('.logo', {
    //     duration: 3000,
    //     rotate: {
    //         x: 1,
    //         y: 100,
    //     }
    // });
    sr.reveal('.aboutus', {
        duration: 1500,
        origin: 'right',
        distance: '-100px'
    });
    $(document).ready(function(){
        let scroll_link = $('.scroll');
       
         //smooth scrolling -----------------------
         scroll_link.click(function(e){
             e.preventDefault();
             let url = $('body').find($(this).attr('href')).offset().top;
             $('html, body').animate({
               scrollTop : url
             },700);
             $(this).parent().addClass('active');
             $(this).parent().siblings().removeClass('active');
             return false;	
          });
       });