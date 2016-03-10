console.log("This doc just loaded");
$(".document").on("load",function(){console.log("js was correctly  inncluded")})
document.getElementById("boxDiv").style.transition = "all 0.8s";
document.getElementById("boxDiv1").style.transition = "all 0.8s";




$(".buttonOne").on("click",function(){
	$(".buttonOne").css("background-color"," #000033")
	$(".buttonTwo").css("background-color"," #41af9b")
	$(".buttonThree").css("background-color"," #41af9b")
	$(".buttonFour").css("background-color"," #41af9b")
	$(".buttonFive").css("background-color"," #41af9b")
	$(".button").css("left","19.6%")
	$(".box1").css("left","40%")
	$(".box2").css("visibility","hidden")
	$(".box3").css("visibility","hidden")
	$(".box4").css("visibility","hidden")
	$(".box5").css("visibility","hidden")
});

$(".buttonTwo").on("click",function(){
	$(".buttonOne").css("background-color"," #41af9b")
	$(".buttonTwo").css("background-color","  #000033")
	$(".buttonThree").css("background-color"," #41af9b")
	$(".buttonFour").css("background-color"," #41af9b")
	$(".buttonFive").css("background-color"," #41af9b")
	$(".button").css("left","4.8%")
	$(".box1").css("left","25%")
	$(".box2").css("visibility","visible")
	$(".box2").css("left","60%")
	$(".box3").css("visibility","hidden")
	$(".box4").css("visibility","hidden")
	$(".box5").css("visibility","hidden")
});


$(".buttonThree").on("click",function(){
	$(".buttonOne").css("background-color"," #41af9b")
	$(".buttonTwo").css("background-color"," #41af9b")
	$(".buttonThree").css("background-color"," #000033")
	$(".buttonFour").css("background-color"," #41af9b")
	$(".buttonFive").css("background-color"," #41af9b")
	$(".button").css("left","4.8%")
	$(".box1").css("left","25%")
	$(".box3").css("visibility","visible")
	$(".box2").css("visibility","hidden")
	$(".box4").css("visibility","hidden")
	$(".box5").css("visibility","hidden")
});

$(".buttonFour").on("click",function(){
	$(".buttonOne").css("background-color"," #41af9b")
	$(".buttonTwo").css("background-color"," #41af9b")
	$(".buttonThree").css("background-color","#41af9b")
	$(".buttonFour").css("background-color","#000033")
	$(".buttonFive").css("background-color"," #41af9b")
	$(".button").css("left","4.8%")
	$(".box1").css("left","25%")
	$(".box4").css("visibility","visible")
	$(".box2").css("visibility","hidden")
	$(".box3").css("visibility","hidden")
	$(".box5").css("visibility","hidden")
});

$(".buttonFive").on("click",function(){
	$(".buttonOne").css("background-color"," #41af9b")
	$(".buttonTwo").css("background-color"," #41af9b")
	$(".buttonThree").css("background-color","#41af9b")
	$(".buttonFour").css("background-color","#41af9b")
	$(".buttonFive").css("background-color","#000033")
	$(".button").css("left","4.8%")
	$(".box1").css("left","25%")
	$(".box5").css("visibility","visible")
	$(".box2").css("visibility","hidden")
	$(".box3").css("visibility","hidden")
	$(".box4").css("visibility","hidden")
});



