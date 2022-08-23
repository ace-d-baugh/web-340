/*
============================================
; Title:  index.js
; Author: Professor Krasso & Ace Baugh1
; Date:   August 23 2022
; Description: Assignment 3.2 - Node's Module System
;              Outputs a series of sports teams and 
;              their respective championship
;===========================================
*/

const findTeams = require('./team-manager');
const getGames = require('./team-manager');


function showTeams() {

	console.log('\n  -- DISPLAYING TEAMS --');
	for (let team of findTeams()) {
      let currentTeam = team;
      console.log(`Name: ${currentTeam.name} \n Mascot: ${currentTeam.mascot} \n Player Count: ${currentTeam.playerCount} \n`);
   }
}

function showGame() {
   console.log('\n  -- CHAMPIONSHIP GAME --');
   console.log(getGames());
}

showTeams();
showGame();




