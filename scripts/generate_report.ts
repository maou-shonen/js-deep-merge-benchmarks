import { $, fs, path, os } from "zx"

const rootDir = path.resolve(import.meta.dirname, "..")
const reportDir = path.resolve(rootDir, "report")

const result = await $`npx tsx ${path.resolve(rootDir, "src", "index.ts")}`

// recreate report dir
await fs.rm(reportDir, { recursive: true, force: true })
await fs.mkdir(reportDir, { recursive: true })

const output = `
- time: ${new Date().toUTCString()}
- os: ${os.type()} ${os.release()} ${os.arch()}
- cpu: ${os.cpus()[0].model} x ${os.cpus().length} @ ${os.cpus()[0].speed} MHz

\`\`\`
${result.stdout}
\`\`\`
`
await fs.writeFile(path.resolve(reportDir, "table.md"), output)
