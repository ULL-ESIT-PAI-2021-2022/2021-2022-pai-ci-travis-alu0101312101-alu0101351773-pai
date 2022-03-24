const valid = require('../src/valid_dates');

describe('Valid Year test', () => {
  test('Good Years', () => {
    expect(valid.validYear(1900)).toEqual(false);
    expect(valid.validYear(1963)).toEqual(true);
    expect(valid.validYear(2001)).toEqual(true);
    expect(valid.validYear(9382)).toEqual(true);
    expect(valid.validYear(2022)).toEqual(true);
  });
  test('Bad Years', () => {
    expect(valid.validYear(1700)).toEqual(false);
    expect(valid.validYear(283)).toEqual(false);
    expect(valid.validYear(1799)).toEqual(false);
    expect(valid.validYear(10432)).toEqual(false);
    expect(valid.validYear(104440)).toEqual(false);
  });
  test('Extrem Years', () => {
    expect(valid.validYear(1800)).toEqual(true);
    expect(valid.validYear(9999)).toEqual(true);
  });
  test('Non valid values', () => {
    expect(() => {
      valid.validYear(0.1);
    }).toThrow();
    expect(() => {
      valid.validYear(1800.2);
    }).toThrow();
    expect(() => {
      valid.validYear('2');
    }).toThrow();
    expect(() => {
      valid.validYear('asda');
    }).toThrow();
  });
});

describe('Valid month tests', () => {
  test('Valid months', () => {
    expect(valid.validMonth(1)).toEqual(true);
    expect(valid.validMonth(11)).toEqual(true);
    expect(valid.validMonth(7)).toEqual(true);
    expect(valid.validMonth(12)).toEqual(true);
  });
  test('Not valid months', () => {
    expect(valid.validMonth(0)).toEqual(false);
    expect(valid.validMonth(13)).toEqual(false);
    expect(valid.validMonth(34)).toEqual(false);
    expect(valid.validMonth(123123)).toEqual(false);
    expect(valid.validMonth(-1)).toEqual(false);
    expect(valid.validMonth(-11)).toEqual(false);
    expect(valid.validMonth(-7)).toEqual(false);
    expect(valid.validMonth(-12)).toEqual(false);
  });
  test('Non valid values', () => {
    expect(() => {
      valid.validMonth(0.1);
    }).toThrow();
    expect(() => {
      valid.validMonth(1800.2);
    }).toThrow();
    expect(() => {
      valid.validMonth('2');
    }).toThrow();
    expect(() => {
      valid.validMonth('asda');
    }).toThrow();
  });
});

describe('Valid Day test', () => {
  test('Valid days', () => {
    expect(valid.validDay(31, 1, false)).toEqual(true);
    expect(valid.validDay(6, 11, false)).toEqual(true);
    expect(valid.validDay(28, 2, false)).toEqual(true);
    expect(valid.validDay(20, 3, false)).toEqual(true);
  });
  test('29 Feb on Leap year', () => {
    expect(valid.validDay(29, 2, true)).toEqual(true);
  });
  test('29 Feb NOT on Leap year', () => {
    expect(valid.validDay(29, 2, false)).toEqual(false);
  });
  test('Not valid days', () => {
    expect(valid.validDay(32, 1, false)).toEqual(false);
    expect(valid.validDay(-2, 11, false)).toEqual(false);
    expect(valid.validDay(28, -2, false)).toEqual(false);
    expect(valid.validDay(12, 13, false)).toEqual(false);
  });
  test('Not valid values', () => {
    expect(() => {
      valid.validDay(12, 1.52, false);
    }).toThrow();
    expect(() => {
      valid.validDay('12s', 13, false);
    }).toThrow();
    expect(() => {
      valid.validDay(12, '32', false);
    }).toThrow();
    expect(() => {
      valid.validDay(12.4, 13.4, false);
    }).toThrow();
  });
});

describe('Valid date test', () => {
  test('Good Dates', () => {
    expect(valid.validDate(29, 2, 2000)).toEqual(true);
    expect(valid.validDate(20, 3, 2022)).toEqual(true);
    expect(valid.validDate(6, 11, 2001)).toEqual(true);
    expect(valid.validDate(1, 2, 1900)).toEqual(true);
    expect(valid.validDate(1, 2, 1850)).toEqual(true);
  });
  test('Bad Dates', () => {
    expect(valid.validDate(29, 2, 3000)).toEqual(false);
    expect(valid.validDate(-3, 14, 2000)).toEqual(false);
    expect(valid.validDate(1, -10, 1984)).toEqual(false);
    expect(valid.validDate(29, 2, 13500)).toEqual(false);
    expect(valid.validDate(4, 3, -2000)).toEqual(false);
  });
  test('Extrem Dates', () => {
    expect(valid.validYear(1800)).toEqual(true);
    expect(valid.validYear(9999)).toEqual(true);
  });
  test('Non valid values', () => {
    expect(() => {
      valid.validDate(4.5, 3, 2000);
    }).toThrow();
    expect(() => {
      valid.validDate(4, 3.3, -2000);
    }).toThrow();
    expect(() => {
      valid.validDate(4, 3, '3rd');
    }).toThrow();
    expect(() => {
      valid.validDate(4, '3d', -2000);
    }).toThrow();
  });
});
