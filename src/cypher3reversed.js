/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author alu0101312101 (Alejandro García Perdomo)
 * @since Mar 20 2022
 * @desc Cypher 3 reversed.
 *       Cyphers a given number.
 *       The numbers gets respresented into a base 3 number,
 *       then its reversed and the numbers
 *       0, 1, 2, are coded into symbols.
 *       0-> '-' 1->'+' 2->'*'
 *       Negative numbers are represented with ':' in front
 *       of the cyphered number.
 * @see {@link https://drive.google.com/file/d/1aoN7uj0KX6RvWtngTqYMqpxep2_P-XFc/view}
 */

'use strict';

/**
* @description Receives a number and turns it into a code.
* The numbers is converted to base 3, then reversed and finally
* the 0s are turned to '-', 1s to '+' and 2 to '*'.
* @param {number} number
* @return {string} cyphered number
*/
const cypher3Reversed = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('Number must be an integer.');
  }
  let cypheredNumber = '';
  if (number < 0) {
    cypheredNumber += ':';
  }
  const POSITIVE_NUMBER = Math.abs(number);
  const BASE_3_STRING = turnToBase3String(POSITIVE_NUMBER);
  const REVERSED_BASE3 = reverseString(BASE_3_STRING);
  cypheredNumber += cypherString(REVERSED_BASE3);

  return cypheredNumber;
};

/**
* @description Receives a number and returns a string
* with the number converted on base 3.
* @param {number} number
* @return {string} number on base 3
*/
const turnToBase3String = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('Number must be integer.');
  }
  if (number < 0) {
    throw new Error('Number must be positive.');
  }
  let newNumber = number;
  let remainder = 0;
  let base3Number = '';
  while (newNumber >= 3) {
    remainder = newNumber % 3;
    base3Number = remainder + base3Number;
    newNumber -= remainder;
    newNumber /= 3;
  }
  base3Number = newNumber + base3Number;
  return base3Number;
};

/**
* @description Receives a string and reverses it
* @param {string} string
* @return {string} reversed string
*/
const reverseString = (string) => {
  const REAL_STRING= String(string);
  let reversedString = '';
  for (const letter of REAL_STRING) {
    reversedString = letter + reversedString;
  }
  return reversedString;
};

/**
* @description Recevies a string and transform its
* 0s to '-', 1s to '+' ann 2s to '*'.
* @param {string} string
* @return {string} cyphered string
*/
const cypherString = (string) => {
  const REAL_STRING = String(string);
  const CYPHERED_ZEROS = REAL_STRING.replace(/0/g, '-');
  const CYPHERED_ONES = CYPHERED_ZEROS.replace(/1/g, '+');
  const CYPHERED_TWOS = CYPHERED_ONES.replace(/2/g, '*');
  return CYPHERED_TWOS;
};

module.exports = {
  cypherString,
  reverseString,
  turnToBase3String,
  cypher3Reversed,
};
