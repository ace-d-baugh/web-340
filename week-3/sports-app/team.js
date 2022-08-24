/*
============================================
; Title:  index.js
; Author: Professor Krasso & Ace Baugh
; Date:   August 23, 2022
; Description: Assignment 3.2 - Node's Module System
;              Class constructor of the teams
;===========================================
*/

// Creates the class constructor for the teams
class Team {
	constructor(name, mascot, playerCount) {
		this.name = name;
		this.mascot = mascot;
		this.playerCount = playerCount;
	}
}

// Exports the class constructor for the teams
module.exports = Team;
