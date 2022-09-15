import { sum } from '../sum'

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('123', () => {
    expect(1).toEqual(1);
  })
});