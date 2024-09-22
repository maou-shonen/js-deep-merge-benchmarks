/**
 * smart deep merge
 * @description For benchmarking only, Not recommended for direct use in your projects.
 */
export function simpleDeepMerge(target: any, source: any): any {
  for (const key in source) {
    if (source[key] instanceof Object) {
      if (!target[key]) Object.assign(target, { [key]: {} })
      simpleDeepMerge(target[key], source[key])
    } else {
      Object.assign(target, { [key]: source[key] })
    }
  }
  return target
}
