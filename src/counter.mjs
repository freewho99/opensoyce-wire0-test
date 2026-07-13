// Third real code change -- run B in the two-run diff-pollution exclusion
// proof. This run must exclude BOTH the walkthrough committed by the
// original run and the one committed by run A, showing only real source
// (greeting.mjs, farewell.mjs, counter.mjs) in its own generated overview.

export function makeCounter(start = 0) {
  let value = start;
  return {
    next: () => (value += 1),
    reset: () => (value = start),
    value: () => value,
  };
}
