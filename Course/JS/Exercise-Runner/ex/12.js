//ex12

alert("think about an actor");
var isMan = confirm("Is he a Man ?");
var actor = ""
if(isMan){
    var isBlonde = confirm("Is he blonde ? ");
    if(isBlonde) actor = "Philip Seymour ! ";
    else actor = "Tom Cruise !";
}
else{
    var isEnglish = confirm("Is she english");
    if(isEnglish) actor = "Keira Knightley ! "
    else actor= "Natalie Portman !";
}
console.log("actor is - " + actor);