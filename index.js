var  randomNumber1 =Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var  randomNumber2 =Math.floor(Math.random()*6)+1;
var randomdiceimage1="dice"+randomNumber2+".png";
var randomimagesource1="images/"+randomdiceimage1;


var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}