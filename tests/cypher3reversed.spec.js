const {countFrequence, printObject} = require('../src/cypher3reversed.js');

describe('countFrequence Test', () => {
  test('Jutge test', () => {
    let input = '1000000001 1000000011 1000000011 ';
    input += '1000000004 1000000004 1000000200 1000000004';
    const expected = {
      '1000000001': 1,
      '1000000004': 3,
      '1000000011': 2,
      '1000000200': 1,
    };
    expect(countFrequence(input)).toStrictEqual(expected);
  });
  test('Another test', () => {
    let input = '1000000000 1000000000 1000000000 1000000111 ';
    input += '1000001000 1000001000 1000001000 1000001000';
    const expected = {
      '1000000000': 3,
      '1000000111': 1,
      '1000001000': 4,
    };
    expect(countFrequence(input)).toStrictEqual(expected);
  });
  test('Off limits test', () => {
    const UNDER_LIMIT = '1000000000 1000000000 999999999';
    expect(() => countFrequence(UNDER_LIMIT)).toThrow();
    const OVER_LIMIT = '1000001000 1000001000 1000001001';
    expect(() => countFrequence(OVER_LIMIT)).toThrow();
  });
});

describe('Print Object tests', () => {
  test('Print object', () => {
    const input = {
      '1000000000': 3,
      '1000000111': 1,
      '1000001000': 4,
    };
    const expected = '1000000000: 3\n1000000111: 1\n1000001000: 4\n';
    expect(printObject(input)).toBe(expected);
  });
  test('Print array', () => {
    const input = [1, 2, 3, 4];
    const expected = '0: 1\n1: 2\n2: 3\n3: 4\n';
    expect(printObject(input)).toBe(expected);
  });
  test('Not iterable', () => {
    expect(() => printObject(123)).toThrow();
    expect(() => printObject('string')).toThrow();
    expect(() => printObject('longer string with spaces and 3 2 3')).toThrow();
  });
});
