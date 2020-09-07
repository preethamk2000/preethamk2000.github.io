var i = 0,j=0;
var txt_arr = [" Hi! I'm Preetham ",
               " Junior CS UG ",
               " S/W Developer ",
               " ML/DL enthusiast ",
               " Love CTFs ",
               " Flip for more info"];

var icons_arr = ["<i class='fas fa-user-secret myicons'></i>",
                 "<i class='fas fa-desktop myicons' ></i>",
                 "<i class='fas fa-keyboard myicons'></i>",
                 "<i class='fas fa-dice-d20 myicons'></i>",
                 "<i class='fa fa-flag' myicons></i>",
                 ""]
var speed = 100;
var myVar;

function a(){
i=0;
document.getElementById("mydesc").innerHTML = "";
typeAnimation();
}

function typeAnimation() {



if(j < txt_arr.length){

	txt = txt_arr[j];
  if (i < txt.length) {
    document.getElementById("mydesc").innerHTML += txt.charAt(i);
    i++;
    myVar = setTimeout(typeAnimation, speed);
  }
  else{
  i=0;
  document.getElementById("mydesc").innerHTML += icons_arr[j];
  j++;
  clearTimeout(myVar);
  newVar = setTimeout(a,2000);
  //document.getElementById("mydesc").innerHTML = ""
  //setTimeout(typeAnimation, speed);
  }}
 else{
 clearTimeout(myVar);
 j=0;
  newVar = setTimeout(a,2000);
 
 }
  
}


a();