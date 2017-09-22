$(".field").hide();
$(".links").hide();

$(".fab").on('click', function(){
    $(".fab").addClass("expand");
    $(".fab-sha").addClass("active");
    $(".close").addClass("active");
    //links fades in using .fadeIn(ms)
    $(".links").fadeIn(1800);
})

$("#personal").on('click', function(){
	$(".links").remove();
	$(".field").fadeIn(1900);
	// $("#personal").addClass("field");
});

$("#commercial").on('click', function(){
	$(".links").remove();
	$(".field").fadeIn(1900);
	// $("#personal").addClass("field");
});

$("#business").on('click', function(){
	$(".links").remove();
	$(".field").fadeIn(1900);
	// $("#personal").addClass("field");
});

$("#specialty").on('click', function(){
	$(".links").remove();
	$(".field").fadeIn(1900);
	// $("#personal").addClass("field");
});


$(".close").on('click', function(){
    $(".close").removeClass("active");
    $(".fab").removeClass("expand");
    $(".field").fadeOut(500);
    $(".links").fadeOut(500);
    $(".fab-sha").removeClass("active");
    location.reload();
})

