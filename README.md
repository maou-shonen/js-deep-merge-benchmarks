<!-- This file is generated from a template, please do not modify it directly. -->

# js-deep-merge-benchmarks

Some benchmarks for the deep-merge package in JavaScript.

> [!IMPORTANT]
> This is not a very rigorous benchmark, just a personal reference based on the packages I chose to use.
> You should make your selection according to your own needs 🙂, such as package size, TypeScript support, tree-shaking capabilities, etc.

## Benchmarks


- time: Mon, 07 Oct 2024 11:04:40 GMT
- os: Linux 6.8.0-1014-azure x64
- cpu: AMD EPYC 7763 64-Core Processor x 4 @ 0 MHz

```
┌─────────┬─────────────────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name                           │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'simple deep merge (object.assign)' │ '546,051'   │ 1831.3303238519113 │ '±0.19%' │ 546052  │
│ 1       │ 'lodash.merge'                      │ '585,424'   │ 1708.1617764875184 │ '±0.23%' │ 585425  │
│ 2       │ 'deepmerge'                         │ '286,545'   │ 3489.852857831067  │ '±0.23%' │ 286546  │
│ 3       │ 'merge-deep'                        │ '426,527'   │ 2344.5164678517995 │ '±0.16%' │ 426528  │
│ 4       │ 'ts-deepmerge'                      │ '885,642'   │ 1129.1242430641873 │ '±0.28%' │ 885643  │
│ 5       │ 'deepmerge-ts'                      │ '308,236'   │ 3244.264322583236  │ '±0.24%' │ 308237  │
│ 6       │ '@fastify/deepmerge'                │ '1,502,528' │ 665.5448314143946  │ '±0.17%' │ 1502529 │
│ 7       │ 'defu'                              │ '1,230,472' │ 812.6958893037862  │ '±0.22%' │ 1230473 │
└─────────┴─────────────────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

```

