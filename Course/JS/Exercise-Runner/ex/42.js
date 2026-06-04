var letter = "s"
var names = ["Avi","Beni","Gadi","Sami","Susu","Dani","Sarit"];
starsWithLetter(names,letter);
function starsWithLetter(names,letter){
    var newNames =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(name.charAt(0).toLowerCase()===letter.toLowerCase()) newNames.push(name);
    }
    console.log(newNames);
}