// console.log("hello world")
// const matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// //createBoard();
// function createBoard(){
//     const board:string[][]=[];

//     for (let i = 0; i < 4; i++) {
//         board[i]=[];
//         for (let j = 0; j <3; j++) {
//             board[i][j]="🍕";
//         }
//     }    
//     console.table(board);

// }
// //mult table
// //printMultTable()
// function printMultTable(){
//     const board:number[][] = [];
//     for (let i = 0; i <10; i++) {
//         board[i]=[];
//         for (let j = 0; j <10; j++) {
//             board[i][j] = (i+1)*(j+1);
//         }
//     }
//     console.table(board);
//     console.log(board);
// }
// // create matrix:
// // console.table(createMat(3,3));
// function createMat(rows:number , cols:number):number[][]{
//     const mat:number[][] =[];
//     for (let i = 0; i <rows; i++) {
//         mat[i] = [];
//         for (let j = 0; j <cols; j++) {
//             mat[i][j] = Math.floor(Math.random()*10); 
//         }
//     }
//     return mat;
// }
// //console.log(`Max number = `,getMaxInMat(createMat(3,3)));
// //get max
// function getMaxInMat(mat:number[][]):number{
//     console.table(mat);
//     let maxKeep:number=0;
//     for (let i = 0; i < mat.length; i++) {
//         let row:number[] = mat[i];
//         for (let j = 0; j < row.length; j++) {
//             let num:number = row[j];
//             if(num>maxKeep){
//                 maxKeep=num;
//             }
//         }
//     }
//     return maxKeep;
// }
// //ex- Sparse Matrix:
// const mat1:number[][]=[
// [0,1,0],
// [0,0,0],
// [1,0,0]
// ]
// const mat2:number[][]=[
// [0,1,0],
// [0,4,0],
// [1,0,0]
// ]       
// function isSparse(mat:number[][]):boolean{
//     const rowscount:number=mat.length;
//     const colscount:number=mat[0].length;
//     const cellscount:number = rowscount*colscount;

//     if(rowscount!==colscount) return false;
//     let notZeroCount:number= 0;
//     for (let i = 0; i < mat.length; i++) {
//         let notZeroCountInRow:number = 0;
//         let row:number[] = mat[i];
//         for (let j = 0; j < row.length; j++) {
//             let num:number = row[j];
//             if(num!==0){
//                 notZeroCountInRow++;
//                 if(notZeroCountInRow >2)return false;
//                 notZeroCount++;
//                 if(notZeroCount>= 0.2 *cellscount) return false;
//             } 
//         }
//     }
//     return true;
// }
// console.log(createSpareMatrix([15,25,8,9] , [4,3,2,0] , [4,2,2,3] , 25))
// function createSpareMatrix(vals:number[] , rows:number[] , cols:number[] ,cellcount:number) {
//     const mat:number[][] =[];
//     const matLength = Math.sqrt(cellcount);
//     for (let i = 0; i <matLength; i++) {
//        mat[i]= [] ;
//        for (let j = 0; j < matLength; j++) {
//             mat[i][j] =0;
//         } 
//     }
//     for (let i = 0; i < vals.length; i++) {
//         mat[rows[i]][cols[i]] = vals[i];
//     } 
//     console.table(mat);
// }

//ex -city distance table

const cities:string[] = ['A','B','C','D'];
const distanceMat:number[][] = [
    [0,18,10,12],
    [18,0,17,20],
    [10,17,0,13],
    [12,20,13,0]
];
interface City {
    name:string,
    distance:number
};
//console.log("",farestCity("A",distanceMat));
//get farest city:
function farestCity(city:string , distMat:number[][]) :City{
    const cityIndex:number = cities.indexOf(city);
    let max:number =0;
    let maxKeep:number=0;
    for (let i = 0; i < cities.length; i++){ 
        const dist = distMat[cityIndex][i];
        if(dist>max){
            max=dist;
            maxKeep = i;
        }
    }
    const cityD:City = {name:cities[maxKeep] , distance:max}
    return cityD;
}

//farest cities:
// printFarest();
function printFarest(){
    for (let i = 0; i <cities.length; i++) {
        const city:string = cities[i];
        const farestcity:City = farestCity(city,distanceMat)
        console.log("city:" + city + "" , farestcity);
    }
}

//find central city:
console.log(`the central city : ${getMostCentralCity()}`);
function getMostCentralCity() :string{
    let maxDistances:number[] = []
    for (let i = 0; i < distanceMat.length; i++) {
        // const city = cities[i];
        const cityDistances:number[] = distanceMat[i];
        const maxDistance:number =Math.max(...cityDistances);
        maxDistances.push(maxDistance); 
    }
    const minDistance:number = Math.min(...maxDistances);
    const minDistanceCityIndex:number = maxDistances.indexOf(minDistance);
    const mostCntral:string = cities[minDistanceCityIndex];
    return mostCntral;
}
