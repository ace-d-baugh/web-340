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

const teamManager = require('./team-manager');

function showTeams() {
	console.log('\n  -- DISPLAYING TEAMS --');
	for (let team of teamManager.findTeams()) {
		let currentTeam = team;
		console.log(`Name: ${currentTeam.name}\nMascot: ${currentTeam.mascot}\nPlayer Count: ${currentTeam.playerCount}\n`);
	}
}

function showGame() {
	console.log('\n  -- CHAMPIONSHIP GAME --');
	console.log(teamManager.getGame());
}

showTeams();
showGame();
