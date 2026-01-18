//generte random password 
// console.log("password: " + generatePass(6));
function generatePass(passLength){
    var newPass='';
    var chars ='abcdefghijklmnopqrstvurwxyz1234567890';
    for (let i = 0; i < passLength; i++) {
        newPass+=chars.charAt(getRandomInt(chars.length));
    }
    return newPass
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

