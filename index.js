
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var setImages = "dice" + randomNumber1 +".png" ;
var setImageSource ="./images/" + setImages;
document.querySelectorAll("img")[0].setAttribute("src" , setImageSource);




var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var setImages2 = "dice" + randomNumber2 +".png" ;
var setImageSource2 ="./images/" + setImages2;
document.querySelectorAll("img")[1].setAttribute("src" , setImageSource2);


var setFunctions = myFunction();

function myFunction (){
    if (randomNumber1 > randomNumber2){
        return("🚩Player 1 Wins");
    }else if (randomNumber2 > randomNumber1){
        return("Player 2 Wins🚩")
    }else if (randomNumber1 = randomNumber2) {
        return("It's a tie")
    }
}

document.querySelector("h1").innerHTML = setFunctions;