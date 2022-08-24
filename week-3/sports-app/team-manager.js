/*
============================================
; Title:  team-manager.js
; Author: Professor Krasso & Ace Baugh
; Date:   August 23, 2022
; Description: Assignment 3.2 - Node's Module System
;              Creates teams and finds teams from passed names
;              Outputs a championship of the found teams
;===========================================
*/

// Imports the exported class constructor from team.js and stores them in a variable
const Team = require('./team');
// Imports the momnet module and stores it in a variable
const moment = require('moment');

// this function will return an array of teams
function findTeams() {
	let teams = [];

	teams.push(new Team('Kansas Innerstate University', 'Moutaineers', 20));
	teams.push(new Team('Hawaii College Tech', 'Corn Huskers', 20));
	teams.push(new Team('Arizona Christian Prep', 'Surfers', 20));
	teams.push(new Team('United Alaska State University', 'Crocodiles', 20));
	teams.push(new Team('New Mexico Trinity International', 'Inuits', 20));

	return teams;
}

// This function will return a team from the array that matches the name passed to it
function findTeam(name) {
	for (let team of findTeams()) {
		if (team.name === name) {
			return team;
		}
	}
}

/* This function will return a string of the championship game by finding the matching team names
   then adding their names and mascot to the string. It will use the moment module to format the 
   date 7 days in the future. */
function getGame() {
	return `${findTeam('Kansas Innerstate University').name} ${findTeam('Kansas Innerstate University').mascot} is playing ${
		findTeam('Hawaii College Tech').name
	} ${findTeam('Hawaii College Tech').mascot} on ${moment().add(7, 'days').format('MM-DD-YYYY')} at 7:30 PM CST.`;
}

module.exports = { findTeams, getGame };
