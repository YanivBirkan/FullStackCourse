"use strict";
const gcars = [
    { id: 1, distance: 0, speed: 10 },
    { id: 2, distance: 0, speed: 15 },
];
function onInit() {
    renderCars();
}
function renderCars() {
    let strHTML = "";
    for (let i = 0; i < gcars.length; i++) {
        strHTML += `
         <div class="car car${i + 1}" onclick="onSpeedUp(${i})">Car${i + 1}</div>
         `;
    }
    let elRoad = document.querySelector(".road");
    if (elRoad) {
        elRoad.innerHTML = strHTML;
    }
}
function onStartRace() {
    let raceTimerId = null;
    raceTimerId = setInterval(() => {
        // 1. Move the cars first
        moveCars();
        // 2. Check if ANY car has crossed the finish line (720px)
        const isRaceOver = gcars[0].distance > 1200 || gcars[1].distance > 1200;
        if (isRaceOver) {
            clearInterval(raceTimerId);
            raceTimerId = null;
            console.log("Race finished!");
        }
    }, 100); // Runs every 2 seconds
}
function moveCars() {
    const elCars = document.querySelectorAll(".car");
    for (let i = 0; i < gcars.length; i++) {
        const carDetails = gcars[i];
        console.log("carDetails before:", carDetails);
        const elCar = elCars[i];
        elCar.style.marginLeft = `${carDetails.distance + carDetails.speed}px`;
        carDetails.distance += carDetails.speed;
        elCar.style.marginLeft = `${carDetails.distance}px`;
    }
}
