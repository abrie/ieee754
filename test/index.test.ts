import {
  float64ToBigInt64,
  ulpDistance,
  ulpEqual,
  ulpAlmostEqual,
} from '../src';

describe('ULP float comparison', () => {
  it('integer representation of MIN_VALUE is 1', () => {
    expect(float64ToBigInt64(Number.MIN_VALUE)).toStrictEqual(BigInt(1));
  });

  it('distance between zero and zero is 0', () => {
    expect(ulpDistance(0, 0)).toStrictEqual(BigInt(0));
  });

  it('distance between same values is 0', () => {
    const val = 28172.21223;
    expect(ulpDistance(val, val)).toStrictEqual(BigInt(0));
  });

  it('distance between 1 and 1+epsilon is 1', () => {
    expect(ulpDistance(1, 1 + Number.EPSILON)).toStrictEqual(BigInt(1));
  });

  it('distance between MAX_VALUE and Infinity is 1 ULP', () => {
    expect(ulpDistance(Number.MAX_VALUE, Infinity)).toStrictEqual(BigInt(1));
  });

  it('compare 0.2 + 0.1', () => {
    expect(0.2 + 0.1).not.toEqual(0.3);
    expect(ulpDistance(0.2 + 0.1, 0.3)).toStrictEqual(BigInt(1));
    expect(ulpEqual(0.2 + 0.1, 0.30000000000000004)).toStrictEqual(true);
  });

  it('compare -0.2 + 0.3', () => {
    expect(-0.2 + 0.3).not.toEqual(0.1);
    expect(ulpDistance(-0.2 + 0.3, 0.1)).toStrictEqual(BigInt(2));
  });

  it('-0 and 0 are equivalent', () => {
    expect(ulpDistance(0, -0)).toStrictEqual(BigInt(0));
  });

  it('NaN results in false', () => {
    expect(ulpAlmostEqual(Number.NaN, 3.0, 1)).toStrictEqual(false);
    expect(ulpAlmostEqual(3.14, Number.NaN, 1)).toStrictEqual(false);
    expect(ulpAlmostEqual(Number.NaN, Number.NaN, 1)).toStrictEqual(false);
  });
});
