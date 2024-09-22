import { Bench } from "tinybench"
import { simpleDeepMerge } from "./utils.js"
import { merge } from "lodash-es"
import _fastifyDeepmerge from "@fastify/deepmerge"
import deepmerge from "deepmerge"
import { defu } from "defu"
import mergeDeep from "merge-deep"
import * as tsDeepMerge from "ts-deepmerge"
import * as deepmergeTs from "deepmerge-ts"

const bench = new Bench({ time: 1000 })

const data1 = { a: 1, b: { x: 10, z: [1, 2, 3] }, d: { e: 3 } }
const data2 = { b: { y: 20, z: [4, 5] }, c: 3 }

const fastifyDeepmerge = _fastifyDeepmerge({})

bench
  .add("simple deep merge (object.assign)", () => {
    simpleDeepMerge(data1, data2)
  })
  .add("lodash.merge", () => {
    merge(data1, data2)
  })
  .add("deepmerge", () => {
    deepmerge(data1, data2)
  })
  .add("merge-deep", () => {
    mergeDeep(data1, data2)
  })
  .add("ts-deepmerge", () => {
    tsDeepMerge.merge(data1, data2)
  })
  .add("deepmerge-ts", () => {
    deepmergeTs.deepmerge(data1, data2)
  })
  .add("@fastify/deepmerge", () => {
    fastifyDeepmerge(data1, data2)
  })
  .add("defu", () => {
    defu(data1, data2)
  })

await bench.warmup() // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run()

const result = bench.table()
console.table(result)
