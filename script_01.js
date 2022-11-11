"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callew
// Funktionsdeklaration
function test()
{
    console.log("Hallo");
}
/****** Funtkionen 02a *******/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() 

/****** Funtkionen 02b *******/
// 2.b Parametisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("YO"); // Argument
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Parameter


/******* Funtkionen 02c *******/
// 2c. Mehrere Parametern

// ausgabeNamenParams("Ey"); // Argumente
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname")); // Argumente

function ausgabeNamenParams(firstName,familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}