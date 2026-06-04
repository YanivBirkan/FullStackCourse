//ex 55
const gMat = [
    [1, 0, 2],
    [3, 2, 1],
    [2, 1, 9],
];
console.log(`sum of col 1 = ${sumCol(gMat, 0)}`);
function sumCol(mat, colId) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        const num = mat[i][colId];
        sum += num;
    }
    return sum;
}
console.log(`sum of row 1 = ${sumRow(gMat, 0)}`);
function sumRow(mat, rowId) {
    let sum = 0;
    for (let i = 0; i < mat[0].length; i++) {
        const num = mat[rowId][i];
        sum += num;
    }
    return sum;
}
console.log(`max num  = ${findMax(gMat)}`);
function findMax(mat) {
    let max = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let num = mat[i][j];
            if (max < num)
                max = num;
        }
    }
    return max;
}
console.log(`max num  = ${findMax(gMat)}`);
function findAvg(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let num = mat[i][j];
            sum += num;
        }
    }
    return sum / (mat.length * mat[0].length);
}
function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {
    let sum = 0;
    for (let i = rowIdxStart; i <= rowIdxEnd; i++) {
        for (let j = colIdxStart; j <= colIdxEnd; j++) {
            const num = mat[i][j];
            sum += num;
        }
    }
    return sum;
}
//ex 56
console.log(`The function is ${checkIfSymmetric(gMat) ? `symetric` : `not symetric`}`);
function checkIfSymmetric(mat) {
    if (mat.length !== mat[0].length)
        return false;
    else {
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (mat[i][j] !== mat[j][i])
                    return false;
            }
        }
        return true;
    }
}
//ex 57
console.log(findMode(gMat));
function findMode(mat) {
    const modeList = modeMap(mat);
    let max = 0;
    let modenums = [];
    for (const numKey in modeList) {
        let countVal = modeList[numKey];
        if (countVal > max) {
            max = countVal;
            modenums = [+numKey];
        }
        else if (countVal === max) {
            modenums.push(+numKey);
        }
    }
    return modenums;
}
console.log(findMode(gMat))
function findMode(mat){
   const modeList = modeMap(mat);
   let max = 0;
   let modenums = [];
   for (const numKey in modeList) {
      let countVal = modeList[numKey]; 
      if(countVal>max) {
        max=countVal;
        modenums= [+numKey]
      }else if(countVal===max){
        modenums.push(+numKey);
      }
   }
   return modenums;
}

function modeMap(mat){
    let modesList = {};
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            const num=mat[i][j];
            modesList[num] = (modesList[num] ?? 0) + 1;
            // if(modesList[num]){
            //     modesList[num]++;
            // }else{
            //     modesList[num] =1;
            // }
        }            
    }
    
    return modesList;
}
