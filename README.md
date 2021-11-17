# benchmark
A small repo for benchmarking algorithms

To use this repo, which makes use of [Benchmark.js](https://benchmarkjs.com/) for the heavy lifting, follow the example in `example.js` in a new file, or change `example.js` locally. 

Add in a data set or source, add in some functions that make use of it, and then change the benchmarking suite `.add` calls to use the functions added. 

Then simply run the file.

Results will look something like this:

```
Sandy's Effort x 11,100 ops/sec ±2.40% (80 runs sampled)
Delia's Effort x 13,063 ops/sec ±1.88% (86 runs sampled)
Cole's Effort x 22,200 ops/sec ±2.06% (85 runs sampled)
Fastest is Cole's Effort
```

`ops/sec` is the crucial measure; the larger the better.  