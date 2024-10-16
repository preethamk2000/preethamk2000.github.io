var i = 0,j = 0;
var txt_arr = [" Hi! I'm Preetham ",
               " S/W Engineer ",
               " ML/DL enthusiast ",
               " Love CTFs ",
               " Flip for more info",
               " All hail "];

var icons_arr = ["<i class='fas fa-user-secret myicons'></i>",
                 "<i class='fas fa-keyboard myicons'></i>",
                 "<i class='fas fa-dice-d20 myicons'></i>",
                 "<i class='fa fa-flag' myicons></i>",
                 "",
                 "<span class='rick'>Pickle Rick!</span>"]
var speed = 100;
var myVar;

function typeAnimation(){
i = 0;
document.getElementById("mydesc").innerHTML = "";
typeChars();
}

function typeChars() {

if(j < txt_arr.length){

  txt = txt_arr[j];

  if (i < txt.length) {
    document.getElementById("mydesc").innerHTML += txt.charAt(i);
    i++;
    myVar = setTimeout(typeChars, speed);
  }
  else {
  i=0;
  document.getElementById("mydesc").innerHTML += icons_arr[j];
  j++;
  clearTimeout(myVar);
  newVar = setTimeout(typeAnimation,2000);
  }
}
 else{
 clearTimeout(myVar);
 j=0;
 newVar = setTimeout(typeAnimation,2000);
 }
  
}


typeAnimation();

// TryHackMe is a superb site to learn cybersecurity.
console.log('%c ', 'font-size:500px; background:url(https://tryhackme-badges.s3.amazonaws.com/gansta.png) no-repeat;');
console.log("Scroll up ;P!")