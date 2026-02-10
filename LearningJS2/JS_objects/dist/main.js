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
let globalId = 101;
const HarryPotter_actorList = [
    { name: "daniel redclif", salary: 9000 }, { name: "emma wotsson", salary: 10000 }, { name: "ron wissly", salary: 9000 }
];
// let movie1 ={
//   id:101,
//   name:"harry potter",
//   actors:[{name:"daniel redclif" , slary:9000} , {name:"emma wotsson" , salary:10000}]
// }
const moviesList = createMovies(3);
//console.log("new movies =:" , createMovies(3));
const movieList2 = [createMovie("m1", [createActor("actor 1", 100), createActor("actor 2", 100)]), createMovie("m2", [, createActor("actor 1 ", 100), createActor("actor 3", 100)])];
//console.log(movieList2);
const [actor, movie] = findActorWithBestSalary(moviesList);
//console.log("moovies of actor 1 ", getMoviesOfActor("actor 1"));
function createMovie(gName, gActors) {
    let newMovie = {
        id: globalId++,
        name: gName,
        actors: gActors
    };
    return newMovie;
}
function createMovies(count) {
    const moviesList = [];
    for (let i = 0; i < count; i++) {
        let countName = 0;
        let newMovie = createMovie(`moovie ${i + 1}`, [createActor(`actor ${countName++}`, (Math.floor(Math.random() * 10000))), createActor(`actor ${countName++}`, (Math.floor(Math.random() * 10000)))]);
        moviesList.push(newMovie);
    }
    return moviesList;
}
function createActor(gName, gSalary) {
    let NewActor = {
        name: gName,
        salary: gSalary
    };
    return NewActor;
}
function findActorWithBestSalary(moviesList) {
    let max = 0;
    let MaxActorKeep = null;
    let moovieKeep = null;
    for (let i = 0; i < moviesList.length; i++) {
        const movie = moviesList[i];
        let movieActorList = movie.actors;
        for (let y = 0; y < movieActorList.length; y++) {
            const currActor = movieActorList[y];
            if (currActor.salary > max) {
                max = currActor.salary;
                MaxActorKeep = currActor;
                moovieKeep = moviesList[i];
            }
        }
    }
    return [MaxActorKeep, moovieKeep];
}
function getMoviesOfActor(gname) {
    let actorMovies = [];
    for (let i = 0; i < movieList2.length; i++) {
        const currMovie = movieList2[i];
        console.log(currMovie);
        for (let j = 0; j < currMovie.actors.length; j++) {
            const currMovieActor = currMovie.actors[j];
            if ((currMovieActor === null || currMovieActor === void 0 ? void 0 : currMovieActor.name) == gname) {
                actorMovies.push(currMovie);
            }
        }
    }
    return actorMovies;
}
countWordApperances("puki ben david and muki ben david");
function countWordApperances(txt) {
    var _a;
    let words = txt.split(" ");
    let wordscount = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        wordscount[word] = ((_a = wordscount[word]) !== null && _a !== void 0 ? _a : 0) + 1;
        // let count: string =wordscount[word];
        // if(wordscount[word]){
        //   wordscount[word]++;
        // }
        // else{
        //    wordscount[word] =1
        // }
        // // wordscount[word] =  (count) ? count+1 :1; 
    }
    console.log(wordscount);
}
