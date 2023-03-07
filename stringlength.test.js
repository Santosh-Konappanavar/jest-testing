const stringLength = require('./stringLength')

test('check the legth of string', () =>{
    expect(stringLength('santosh')).toBe(7)
})

test('Check if the length is less than 1 and not longer than 10', () =>{
    expect(stringLength('Konappanavar')).toBeGreaterThan(1);
    expect(stringLength('k')).toBeLessThan(10)
})