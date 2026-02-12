const { performance } = require('perf_hooks');

function constantTimeSelect(f, a, b) {
  const r = new Uint8Array(a.length);
  const m = -(f & 1) & 0xFF;
  for (let i = 0; i < r.length; i++) {
    r[i] = (a[i] & m) | (b[i] & ~m);
  }
  return r;
}

function runTrial(flag, trials, a, b) {
  for(let i=0; i<1000; i++) constantTimeSelect(flag, a, b);
  const start = performance.now();
  for(let i=0; i<trials; i++) constantTimeSelect(flag, a, b);
  return performance.now() - start;
}

const trials = 100000;
const a = new Uint8Array(32).fill(1);
const b = new Uint8Array(32).fill(2);

console.log("--- High-Precision Timing Trial ---");
const timeSuccess = runTrial(1, trials, a, b);
const timeFallback = runTrial(0, trials, a, b);
const meanSuccess = timeSuccess / trials;
const meanFallback = timeFallback / trials;

console.log(`Mean Success:  ${meanSuccess.toFixed(8)}ms`);
console.log(`Mean Fallback: ${meanFallback.toFixed(8)}ms`);
const diff = Math.abs(meanSuccess - meanFallback);
console.log(`Difference:    ${diff.toFixed(8)}ms`);
console.log("Flat line achieved?", diff < 0.0001 ? "YES" : "NO");
