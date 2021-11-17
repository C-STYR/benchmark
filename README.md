# benchmark
A small repo for benchmarking algorithms.

To use this repo, which makes use of [Benchmark.js](https://benchmarkjs.com/) for the heavy lifting, follow the example in `example.js`: Either copy it into a new file or change `example.js` locally. 

Add in a data set or source, add in some functions that make use of it, and then change the benchmarking suite `.add` calls to use the functions added. `example.js` makes use of a large string stored separately in `bigstring.js` and imported, but you could add data directly into `example.js`.

Then simply run the file.

Results will look something like this:

```
Function 1 x 11,100 ops/sec ±2.40% (80 runs sampled)
Function 2 x 13,063 ops/sec ±1.88% (86 runs sampled)
Function 3 x 22,200 ops/sec ±2.06% (85 runs sampled)
Fastest is Function 3
```

`ops/sec` is the crucial measure; the larger the better.  

If you'd like to see more metrics, uncomment the `console.log(this)` call on line 53 or refer to the [docs](https://benchmarkjs.com/docs). 