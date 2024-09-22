<!-- This file is generated from a template, please do not modify it directly. -->

# js-deep-merge-benchmarks

Some benchmarks for the deep-merge package in JavaScript.

> [!IMPORTANT]
> This is not a very rigorous benchmark, just a personal reference based on the packages I chose to use.
> You should make your selection according to your own needs 🙂, such as package size, TypeScript support, tree-shaking capabilities, etc.

## Benchmarks


- time: Sun, 22 Sep 2024 14:10:59 GMT
- os: Linux 6.8.0-1014-azure x64
- cpu: AMD EPYC 7763 64-Core Processor x 4 @ 0 MHz

```
┌─────────┬─────────────────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name                           │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'simple deep merge (object.assign)' │ '555,094'   │ 1801.4954052912476 │ '±0.25%' │ 555095  │
│ 1       │ 'lodash.merge'                      │ '559,027'   │ 1788.8215348784631 │ '±0.25%' │ 559028  │
│ 2       │ 'deepmerge'                         │ '279,188'   │ 3581.814344403449  │ '±0.27%' │ 279189  │
│ 3       │ 'merge-deep'                        │ '429,688'   │ 2327.2647403117517 │ '±0.23%' │ 429689  │
│ 4       │ 'ts-deepmerge'                      │ '898,271'   │ 1113.2486707813741 │ '±0.29%' │ 898272  │
│ 5       │ 'deepmerge-ts'                      │ '320,532'   │ 3119.8088309189957 │ '±0.25%' │ 320533  │
│ 6       │ '@fastify/deepmerge'                │ '1,582,474' │ 631.9216145594145  │ '±0.20%' │ 1582475 │
│ 7       │ 'defu'                              │ '1,227,183' │ 814.8738110987565  │ '±0.27%' │ 1227184 │
└─────────┴─────────────────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

```

