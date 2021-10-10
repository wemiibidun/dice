let randomNumber1 = Math.floor(Math.random() * 6)+1;//Generates random number between 1-6
//console.log(randomNumber1);
let randomNumber2 = Math.floor(Math.random()*6) + 1;
 
let images1 = "images/dice"+ randomNumber1 +".png"; //select image 1-6 randomly 
let images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1); //change src to images1
document.querySelector(".dice .img2").setAttribute("src",images2);


if (randomNumber1 == randomNumber2){
    document.querySelector('.container h1').innerHTML = 'Draw!';
}
else if(randomNumber1 > randomNumber2){
    document.querySelector('.container h1').innerHTML = '🚩Player 1 wins!';
}
else{
    document.querySelector('.container h1').innerHTML = '🚩Player 2 wins!';
}