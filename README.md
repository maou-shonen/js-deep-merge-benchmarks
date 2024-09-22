<!-- This file is generated from a template, please do not modify it directly. -->

# js-deep-merge-benchmarks

Some benchmarks for the deep-merge package in JavaScript.

> [!IMPORTANT]
> This is not a very rigorous benchmark, just a personal reference based on the packages I chose to use.
> You should make your selection according to your own needs 🙂, such as package size, TypeScript support, tree-shaking capabilities, etc.

## Benchmarks


- time: Sun, 22 Sep 2024 16:07:25 GMT
- os: Linux 6.8.0-1014-azure x64
- cpu: AMD EPYC 7763 64-Core Processor x 4 @ 0 MHz

```
┌─────────┬─────────────────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name                           │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'simple deep merge (object.assign)' │ '542,215'   │ 1844.2855522527036 │ '±0.21%' │ 542216  │
│ 1       │ 'lodash.merge'                      │ '560,487'   │ 1784.1621158706082 │ '±0.22%' │ 560488  │
│ 2       │ 'deepmerge'                         │ '292,666'   │ 3416.8597074492614 │ '±0.07%' │ 292667  │
│ 3       │ 'merge-deep'                        │ '421,720'   │ 2371.2367086297913 │ '±0.17%' │ 421721  │
│ 4       │ 'ts-deepmerge'                      │ '902,003'   │ 1108.6426191015437 │ '±0.28%' │ 902004  │
│ 5       │ 'deepmerge-ts'                      │ '321,278'   │ 3112.562691618404  │ '±0.24%' │ 321279  │
│ 6       │ '@fastify/deepmerge'                │ '1,546,441' │ 646.6457073715075  │ '±0.17%' │ 1546442 │
│ 7       │ 'defu'                              │ '1,263,983' │ 791.1495026833009  │ '±0.24%' │ 1263984 │
└─────────┴─────────────────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

```

