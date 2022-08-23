/*
============================================
; Title:  team-manager.js
; Author: Professor Krasso & Ace Baugh1
; Date:   August 23 2022
; Description: Assignment 3.2 - Node's Module System
;              Creates teams and finds teams from passed names
;              Outputs a championship of the found teams
;===========================================
*/

const Team = require('./team');
const moment = require('moment');

function findTeams() {
	let teams = [];

	teams.push(new Team('Kansas Innerstate University', 'Moutaineers', 20));
	teams.push(new Team('Hawaii College Tech', 'Corn Huskers', 20));
	teams.push(new Team('Arizona Christian Prep', 'Surfers', 20));
	teams.push(new Team('United Alaska State University', 'Crocodiles', 20));
	teams.push(new Team('New Mexico Trinity International', 'Inuits', 20));

	return teams;
}

function findTeam(name) {
	for (let team of findTeams()) {
		if (team.name === name) {
			return team;
		}
	}
}

function getGame() {
	return `${findTeam('Kansas Innerstate University').name} ${findTeam('Kansas Innerstate University').mascot} is playing ${
		findTeam('Hawaii College Tech').name
	} ${findTeam('Hawaii College Tech').mascot} on ${moment().add(7, 'days').calendar().format('MM-DD-YYYY')} at 7:30 PM CST.`;
}

module.export = findTeams;
module.export = getGame;
