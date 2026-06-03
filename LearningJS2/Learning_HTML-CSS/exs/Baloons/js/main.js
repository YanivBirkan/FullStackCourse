
let gCurrentBottom = 20;
const clickSound = new Audio('/Learning_HTML-CSS/exs/Baloons/pop.wav');

let gBalloons =[
        {id:1 ,bottom:20, speed:10},
        {id:2 ,bottom:20, speed:15}
]
let counterInterval = undefined;
    
function onInit(body){
    counterInterval = setInterval(moveBaloons,500)

}
 
 function popBaloon(baloon){
    clickSound.play();
    // baloon.style.display="none";
    baloon.style.transition = "opacity 0.5s ease-in-out";
    baloon.style.opacity = "0"; 
    setTimeout(()=>{
        baloon.remove();
    },2500);

}

function moveBaloons(){
    let elBaloons= document.querySelectorAll(".baloon");

        for (let i = 0; i < elBaloons.length; i++) {
            const baloonObj=gBalloons[i];
            const baloon = elBaloons[i];
            baloon.style.bottom =`${baloonObj.bottom + baloonObj.speed}px`;
            baloonObj.bottom+=baloonObj.speed;

            if(baloonObj.bottom>=500){
                clearInterval(counterInterval)
                alert(`baloon${baloonObj.id} won`)
            }
        }
    
}
// let gCurrentBottom = 200;
// function onInit(body){
//     gCurrentBottom+=5;
//     let elBaloons= document.querySelectorAll(".baloon");
//     console.log("baloons:",elBaloons)
//     const counterInterval = setInterval(() => {
//         for (let i = 0; i < elBaloons.length; i++) {
//             const baloon = elBaloons[i];
//             baloon.style.bottom = 30 + "px"; 
//             debugger
//             // let getBottomNum = 
//             // baloon.style.bottom =`${baloon.style.bottom}10`
            
//         }
//           if (gCurrentBottom > 500) {
//             clearInterval(counterInterval);
//           }
//     },1000)
// }