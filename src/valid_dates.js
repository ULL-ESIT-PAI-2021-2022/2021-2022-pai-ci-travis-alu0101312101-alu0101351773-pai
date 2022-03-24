/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author alu0101312101 (Alejandro García Perdomo)
 * @since Mar 24 2022
 * @desc Valid dates
 *       Checks if a given date is valid.
 * @see {@link https://jutge.org/problems/P58459_en}
 *
 */

 'use strict';

 /**
  * @description Checs if a date is valid
  * @param {number} day
  * @param {number} month
  * @param {number} year
  * @return {boolean}
  */
 function validDate(day, month, year) {
   if (!Number.isInteger(day)) {
     throw new Error('Only integers for days');
   }
   if (!Number.isInteger(month)) {
     throw new Error('Only integers for months');
   }
   if (!Number.isInteger(year)) {
     throw new Error('Only integers for years');
   }
   if (!validYear(year)) {
     return false;
   }
   const LEAP = isLeapYear(year);
   return validMonth(month) && validDay(day, month, LEAP);
 }
 /**
  * @description Checks if the day given is inside
  *  the limits of the days of the month.
  * Example: day 31, month = 1 (January) => true
  * Example: day 31, month = 2 (February) => false
  * Example: day 29, month = 2, leap = true => true
  * @param {number} day
  * @param {number} month
  * @param {boolean} leap
  * @return {boolean} True is day is valid, false otherwise
  */
 function validDay(day, month, leap) {
   if (!Number.isInteger(day)) {
     throw new Error('Only integers for days');
   }
   if (!Number.isInteger(month)) {
     throw new Error('Only integers for months');
   }
   if (!validMonth(month)) {
     return false;
   }
   let maxDay;
   if (month === 2) {
     maxDay = (leap)? 29 : 28;
   } else if (month <= 7) {
     if ((month % 2) === 1) {
       maxDay = 31;
     } else {
       maxDay = 30;
     }
   } else {
     if ((month % 2) === 0) {
       maxDay = 31;
     } else {
       maxDay = 30;
     }
   }
   if (day > maxDay || day <= 0) {
     return false;
   }
   return true;
 }
 
 /**
  * @description Checks if a given number is a month number.
  * @param {number} month
  * @return {boolean}
  */
 function validMonth(month) {
   if (!Number.isInteger(month)) {
     throw new Error('Only integers for months');
   }
   return (month >= 1 && month <= 12);
 }
 
 /**
  * @description Checks if a given number is between the years 1800 and 9999
  * @param {number} year
  * @return {boolean}
  */
 function validYear(year) {
   if (!Number.isInteger(year)) {
     throw new Error('Only integers for years');
   }
   return (year >= 1800 && year <= 9999);
 }
 
 /**
  * @description Checks if a given year is a leap year or not
  * @param {number} year
  * @return {boolean}
  */
 function isLeapYear(year) {
   if (!validYear(year)) {
     return false;
   }
   if ((year % 100) === 0) {
     const century = year / 100;
     return (century % 4) === 0;
   }
   return (year % 4) === 0;
 };
 
 module.exports = {
   validDate,
   validDay,
   validMonth,
   validYear,
   isLeapYear,
 };
