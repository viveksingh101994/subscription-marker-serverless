import { sum } from '../src/foo';

describe('foo', () => {
  it('should give sum of both the number', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
