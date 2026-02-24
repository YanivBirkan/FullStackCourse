"use strict";
// // create player type :
// type Player = {
//   id: number;
//   score: number;
//   name: string;
// }
// // create first player :
// let player: Player= {
//     id:101,
//     score:98,
//     name:"aaa"
// }
;
;
;
const gPlanes = createPlanes();
const gPassengers = createPassengers(5);
const gFlights = createFlights();
console.log("Passengers List:", gPassengers);
console.log("Planes List:", gPlanes);
console.log("Flights List:", gFlights);
function createPlane(model, seatcount) {
    const newPlane = {
        model: model,
        seatCount: seatcount
    };
    return newPlane;
}
function createPlanes() {
    let airplane1 = createPlane(1234, 100);
    let airplane2 = createPlane("A320-1", 140);
    return [airplane1, airplane2];
}
function generate7DigitNumber() {
    // Generates a random integer between 0 and 9999999
    const randomNum = Math.floor(Math.random() * 10000000);
    return randomNum;
}
function createPassenger(name, flights) {
    const newPassenger = {
        id: generate7DigitNumber(),
        fullName: name,
        flights: flights
    };
    return newPassenger;
}
function createPassengers(count) {
    const passengerArr = [];
    for (let i = 0; i < count; i++) {
        passengerArr.push(createPassenger(`P${i + 1}`, []));
    }
    return passengerArr;
}
function createFlight(departure, destination, plane) {
    const newFlight = {
        date: 0,
        departure: departure,
        destination: destination,
        plane: plane,
        passengers: []
    };
    return newFlight;
}
function createFlights() {
    // const flighDatatArr:[string, string, Airplane][] = [["tel aviv" , "rome" , gPlanes[0]] , ["tel aviv" , "paris" , gPlanes[1]] ,["tel aviv" , "eilat" , gPlanes[0]] ,["tel aviv" , "london" , gPlanes[1]] ,["tel aviv" , "moscow" , gPlanes[0]] ]
    let Flight1 = createFlight("tel aviv", "rome", gPlanes[0]);
    let Flight2 = createFlight("tel aviv", "eilat", gPlanes[1]);
    return [Flight1, Flight2];
}
function isFullyBooked(flight) {
    return flight.passengers.length >= flight.plane.seatCount;
}
function bookFlight(passenger, flight) {
    if (!isFullyBooked) {
        flight.passengers.push(passenger);
        passenger.flights.push(flight);
        console.log("Flight orderd succesfully");
    }
    else {
        console.log("The plane is already full");
    }
}
function getFrequentFlyers() {
    let maxflights = 0;
    let frequentFlyers = [];
    for (let i = 0; i < gPassengers.length; i++) {
        const passenger = gPassengers[i];
        if (passenger.flights.length > maxflights) {
            maxflights = passenger.flights.length;
            frequentFlyers = [passenger];
        }
        else if (passenger.flights.length === maxflights) {
            frequentFlyers.push(passenger);
        }
    }
}
