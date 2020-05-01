export function float64ToBigInt64(n: number): bigint {
  const buffer = new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT);
  const view = new DataView(buffer);
  view.setFloat64(0, n, true);
  return view.getBigInt64(0, true);
}

function signAndMagnitudeToBiased(sam: bigint): bigint {
  if (sam < 0) {
    return ~sam + BigInt(1);
  }
  return sam;
}

export function ulpDistance(a: number, b: number): bigint {
  /* If the numbers are the same, the diff is zero. */
  if (a === b) {
    return BigInt(0);
  }

  const biased1 = signAndMagnitudeToBiased(float64ToBigInt64(a));
  const biased2 = signAndMagnitudeToBiased(float64ToBigInt64(b));

  return biased1 >= biased2 ? biased1 - biased2 : biased2 - biased1;
}

export function ulpAlmostEqual(a: number, b: number, maxULP: number): boolean {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }

  return ulpDistance(a, b) <= BigInt(maxULP);
}

export function ulpEqual(a: number, b: number): boolean {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }

  return ulpDistance(a, b) === BigInt(0);
}
