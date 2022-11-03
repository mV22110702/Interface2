

const mediaQuery = window.matchMedia('(min-width: 330px)');
$('.appShowcase').prevAll().hover(hoverFunc1, hoverFunc2);
function hoverFunc1(event){ 
    let num = 5-$('.appShowcase').prevAll().index(this) + 1;
    $(this).on("click",()=>window.location.href=`${num-1}\\index.html`);
    
    $('html').addClass('addition');
    if (mediaQuery.matches) {

    $(event.target).children("a").css("transform","translateX(-5vw)");
    $(this).children("a").css("transform","translateX(-5vw)");

    $(".appShowcase").attr("src",`screens\\${num}.png`);
    $(".appShowcase").attr("alt",`${num}`);
    $(".appShowcase").fadeIn(1000);
    }
}
function hoverFunc2(event){ 
    $('html').removeClass('addition');
    if (mediaQuery.matches) {

    $(event.target).children("a").css("transform",'translateX(0)');
    $(this).children("a").css("transform",'translateX(0)');
    
    $(".appShowcase").hide();
    $(".appShowcase").removeAttr("style");
    $(".appShowcase").removeAttr("src");
    $(".appShowcase").removeAttr("alt");
    }
}
$('.appShowcase').prevAll().children("a").css({
    "transition-duration" : "1s",
    "display" : "inline-block",
    "background-color" : "wheat",
    "border-radius" : "10%/50%",
    "padding-left" : "0.3vw",
    "position" : "relative",
    "z-index" : "1",
});
$('.appShowcase').prevAll().children("i").css({
    
    "position" : "relative",
    "z-index" : "0",
    "transform" : "translate(-5vw)"
});
$('.appShowcase').prevAll().css({
    "width" : "30vw",
    "height" : "max-content",
    //"border-radius" : "10%/50%",
    "text-align" : "center",
    "background-color" : "wheat",
    "position": "relative",
    "z-index" : "2"
});
$(".appShowcase").hide();