/*
============================================
; Title:  index.js
; Author: Professor Krasso & Ace Baugh
; Date:   August 23, 2022
; Description: Assignment 3.2 - Node's Module System
;              Outputs a series of sports teams and 
;              their respective championship
;===========================================
*/

// Imports the exported functions from team-manager.js and stores them in a variable
const teamManager = require('./team-manager');

// Outputs the teams stored in the array
function showTeams() {
	console.log('\n  -- DISPLAYING TEAMS --');
	for (let team of teamManager.findTeams()) {
		let currentTeam = team;
		console.log(`Name: ${currentTeam.name}\nMascot: ${currentTeam.mascot}\nPlayer Count: ${currentTeam.playerCount}\n`);
	}
}

// Outputs the teams in the championship
function showGame() {
	console.log('\n  -- CHAMPIONSHIP GAME --');
	console.log(teamManager.getGame());
}

// Calls the functions to output the teams
showTeams();
// Calls the functions to output the championship
showGame();
