
$(document).ready(function(){
    //STICY NAVIGATION BAR 
    $(".js--services-section").waypoint(function(direction){
    if (direction == "down") {
        $("nav").addClass("sticky");
    } 
    else {
        $("nav").removeClass("sticky");
    }
    });
    // SLICK SLIDER
    $('.feature-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.client-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.portfolio-slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true
    });
    $('.p-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1  
    });
    // COUNTER UP
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
});