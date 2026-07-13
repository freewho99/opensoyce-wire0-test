// Second real code change for the two-run diff-pollution exclusion proof
// (PR #559 / opensoyce@0.2.1). This run's diff must show ONLY this file --
// the .opensoyce/walkthroughs/pr-2.json committed by earlier runs must be
// excluded by the CLI's diff-filter, not reviewed as part of this change.

export function buildFarewell(name) {
  if (typeof name !== 'string' || !name.trim()) {
    throw new Error('buildFarewell: name must be a non-empty string');
  }
  return `Goodbye, ${name.trim()}! Thanks for testing the diff-pollution fix.`;
}
