<!-- This file is generated from a template, please do not modify it directly. -->

# js-deep-merge-benchmarks

Some benchmarks for the deep-merge package in JavaScript.

> [!IMPORTANT]
> This is not a very rigorous benchmark, just a personal reference based on the packages I chose to use.
> You should make your selection according to your own needs 🙂, such as package size, TypeScript support, tree-shaking capabilities, etc.

## Benchmarks


- time: Sun, 22 Sep 2024 16:01:15 GMT
- os: Linux 6.8.0-1014-azure x64
- cpu: AMD EPYC 7763 64-Core Processor x 4 @ 0 MHz

```
┌─────────┬─────────────────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name                           │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'simple deep merge (object.assign)' │ '549,050'   │ 1821.3260443931335 │ '±0.35%' │ 549051  │
│ 1       │ 'lodash.merge'                      │ '561,100'   │ 1782.2130632449444 │ '±0.37%' │ 561101  │
│ 2       │ 'deepmerge'                         │ '279,804'   │ 3573.9275352466243 │ '±0.40%' │ 279805  │
│ 3       │ 'merge-deep'                        │ '409,718'   │ 2440.7022715570833 │ '±0.30%' │ 409719  │
│ 4       │ 'ts-deepmerge'                      │ '852,508'   │ 1173.0091940380903 │ '±0.34%' │ 852509  │
│ 5       │ 'deepmerge-ts'                      │ '319,364'   │ 3131.2221637719067 │ '±0.36%' │ 319368  │
│ 6       │ '@fastify/deepmerge'                │ '1,525,894' │ 655.3533427911296  │ '±0.28%' │ 1525895 │
│ 7       │ 'defu'                              │ '1,250,730' │ 799.532866778777   │ '±0.42%' │ 1250731 │
└─────────┴─────────────────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

```

