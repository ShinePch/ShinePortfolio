$(document).ready(function(){
    $('.view').click(function(){
        $('#left').fadeToggle();
    });

    $('.main').mouseenter(function(){
        $(this).children('.sub').stop().slideDown(300)

    });//***********************************$('.thumb').open

    $('.main').mouseleave(function(){
        $('.sub').stop().slideUp(300);
        
    });//***********************************$('.thumb').Close
    
    
    
    
    
    
});