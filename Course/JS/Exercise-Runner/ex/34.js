//ex34 
function myIndexOf(str, searchStr) {
    debugger
    for (var i = 0; i < str.length - searchStr.length + 1; i++) {
        var cutStr = str.substring(i, searchStr.length + i)
        if (cutStr === searchStr) return i
    }
    return -1
}

console.log(myIndexOf("abcde" , "cd"));