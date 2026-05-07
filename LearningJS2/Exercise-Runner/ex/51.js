countWordApperances("puki ben david and muki ben david")
function countWordApperances(txt) {
  let words  =txt.split(" ");
  let wordscount  ={};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordscount[word] = (wordscount[word] ?? 0) + 1;
    debugger
  }
  console.log(wordscount);
}