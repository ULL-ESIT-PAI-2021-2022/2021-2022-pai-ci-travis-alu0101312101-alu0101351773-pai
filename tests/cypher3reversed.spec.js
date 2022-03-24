const cypher = require('../src/cypher3reversed.js');

describe('Reverse String test', () => {
  test('Short strings', () => {
    expect(cypher.reverseString('hola')).toBe('aloh');
    expect(cypher.reverseString('raton')).toBe('notar');
    expect(cypher.reverseString('12345')).toBe('54321');
    expect(cypher.reverseString('3t4t5t6t')).toBe('t6t5t4t3');
  });
  test('Long string', () => {
    let longString = 'Esta es una frase muy muy larga, que ';
    longString += 'costará dar la vuelta, al menos a mano.';
    let reversedString = '.onam a sonem la ,atleuv al rad áratsoc';
    reversedString += ' euq ,agral yum yum esarf anu se atsE';
    expect(cypher.reverseString(longString)).toBe(reversedString);
  });
  test('Numbers', () => {
    expect(cypher.reverseString(12345)).toBe('54321');
    expect(cypher.reverseString(-4)).toBe('4-');
    expect(cypher.reverseString(5.43)).toBe('34.5');
  });
});

describe('turnToBase3String Test', () => {
  test('Small numbers', () => {
    expect(cypher.turnToBase3String(27)).toBe('1000');
    expect(cypher.turnToBase3String(3)).toBe('10');
    expect(cypher.turnToBase3String(23)).toBe('212');
    expect(cypher.turnToBase3String(54)).toBe('2000');
    expect(cypher.turnToBase3String(10)).toBe('101');
    expect(cypher.turnToBase3String(0)).toBe('0');
  });
  test('Big numbers', () => {
    expect(cypher.turnToBase3String(12345)).toBe('121221020');
    expect(cypher.turnToBase3String(11223344)).toBe('210010012112102');
    expect(cypher.turnToBase3String(333333333)).toBe('212020020002101000');
    expect(cypher.turnToBase3String(5434234)).toBe('101020002100221');
  });
  test('Negative Numbers', () => {
    expect(() => cypher.turnToBase3String(-5))
        .toThrow('Number must be positive.');
    expect(() => cypher.turnToBase3String(-423))
        .toThrow('Number must be positive.');
    expect(() => cypher.turnToBase3String(-535))
        .toThrow('Number must be positive.');
    expect(() => cypher.turnToBase3String(-524234234))
        .toThrow('Number must be positive.');
  });
  test('Not numbers and decimals', () => {
    expect(() => cypher.turnToBase3String(-5.5))
        .toThrow('Number must be integer.');
    expect(() => cypher.turnToBase3String(423.34))
        .toThrow('Number must be integer.');
    expect(() => cypher.turnToBase3String('gdfa.'))
        .toThrow('Number must be integer.');
    expect(() => cypher.turnToBase3String([3, 4, 5]))
        .toThrow('Number must be integer.');
  });
});

describe('cypherString Test', () => {
  test('Strings with only 0,1 and 2', () => {
    expect(cypher.cypherString('1221')).toBe('+**+');
    expect(cypher.cypherString('20120102')).toBe('*-+*-+-*');
    expect(cypher.cypherString('00000')).toBe('-----');
    expect(cypher.cypherString('122100012')).toBe('+**+---+*');
    expect(cypher.cypherString('021121')).toBe('-*++*+');
    expect(cypher.cypherString('0101001')).toBe('-+-+--+');
    expect(cypher.cypherString('222202')).toBe('****-*');
  });
  test('Strings with other chars', () => {
    expect(cypher.cypherString('123231')).toBe('+*3*3+');
    expect(cypher.cypherString('df11fd')).toBe('df++fd');
    expect(cypher.cypherString('515')).toBe('5+5');
    expect(cypher.cypherString('0099ol')).toBe('--99ol');
  });
  test('Strings with no 0, 1 or 2', () => {
    expect(cypher.cypherString('gwwdsfq')).toBe('gwwdsfq');
    expect(cypher.cypherString('hey hey')).toBe('hey hey');
    expect(cypher.cypherString('65456')).toBe('65456');
    expect(cypher.cypherString('gghhgh65656')).toBe('gghhgh65656');
    expect(cypher.cypherString('fgdfv')).toBe('fgdfv');
    expect(cypher.cypherString(' g g g g ')).toBe(' g g g g ');
    expect(cypher.cypherString('77yy77')).toBe('77yy77');
  });
});

describe('cypher3Reversed Test', () => {
  test('Small positive numbers', () => {
    expect(cypher.cypher3Reversed(0)).toBe('-');
    expect(cypher.cypher3Reversed(1)).toBe('+');
    expect(cypher.cypher3Reversed(2)).toBe('*');
    expect(cypher.cypher3Reversed(31)).toBe('++-+');
    expect(cypher.cypher3Reversed(257)).toBe('*++--+');
    expect(cypher.cypher3Reversed(2077)).toBe('+**++**');
    expect(cypher.cypher3Reversed(5766)).toBe('-*+-**+*');
  });
  test('Small negative numbers', () => {
    expect(cypher.cypher3Reversed(-1)).toBe(':+');
    expect(cypher.cypher3Reversed(-2)).toBe(':*');
    expect(cypher.cypher3Reversed(-31)).toBe(':++-+');
    expect(cypher.cypher3Reversed(-257)).toBe(':*++--+');
    expect(cypher.cypher3Reversed(-2077)).toBe(':+**++**');
    expect(cypher.cypher3Reversed(-5766)).toBe(':-*+-**+*');
  });
  test('Big postive numbers', () => {
    expect(cypher.cypher3Reversed(345345)).toBe('-*++-**++**+');
    expect(cypher.cypher3Reversed(4535235)).toBe('--*++-*-+*++**');
    expect(cypher.cypher3Reversed(3757347)).toBe('----+--**+--+*');
    expect(cypher.cypher3Reversed(45674762)).toBe('*+****++++**++--+');
    expect(cypher.cypher3Reversed(232323333)).toBe('-**--*-*-++-*+-+*+');
    expect(cypher.cypher3Reversed(101010101)).toBe('*+*-+*++*+--+--+*');
    expect(cypher.cypher3Reversed(123456789)).toBe('--**+*-*-**-+*+**');
  });
  test('Big negative numbers', () => {
    expect(cypher.cypher3Reversed(-345345)).toBe(':-*++-**++**+');
    expect(cypher.cypher3Reversed(-4535235)).toBe(':--*++-*-+*++**');
    expect(cypher.cypher3Reversed(-3757347)).toBe(':----+--**+--+*');
    expect(cypher.cypher3Reversed(-45674762)).toBe(':*+****++++**++--+');
    expect(cypher.cypher3Reversed(-232323333)).toBe(':-**--*-*-++-*+-+*+');
    expect(cypher.cypher3Reversed(-101010101)).toBe(':*+*-+*++*+--+--+*');
    expect(cypher.cypher3Reversed(-123456789)).toBe(':--**+*-*-**-+*+**');
  });
  test('Not integers or numbers', () => {
    expect(() => cypher.cypher3Reversed('-123456789')).toThrow();
    expect(() => cypher.cypher3Reversed('-1234sfgsfdg')).toThrow();
    expect(() => cypher.cypher3Reversed('errorerror')).toThrow();
    expect(() => cypher.cypher3Reversed(16.5)).toThrow();
    expect(() => cypher.cypher3Reversed(-5.6)).toThrow();
  });
});
