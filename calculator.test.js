const calculator = require('./calculator')

  let exec =new calculator(2,3)
  describe('test my calculator', () => {
    test('add Numbers', () => {
      expect(exec.add()).toBe(5);
    });
  
    test('subtract two numbers', () => {
        expect(exec.subtract()).toBe(-1);
    });

    test('multiply two numbers', () => {
        expect(exec.multiply()).toBe(6);
    });

    test('multiply two numbers', () => {
        expect(exec.divide()).toBe(2/3);
    });
  });