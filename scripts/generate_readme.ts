import { fs, path } from "zx"

const rootDir = path.resolve(import.meta.dirname, "..")
const reportDir = path.resolve(rootDir, "report")

// readme template
const templatePath = path.resolve(rootDir, "README.template.md")
const template = await fs.readFile(templatePath, "utf8")

// read report
const reportPath = path.resolve(reportDir, "table.md")
if (!fs.existsSync(reportPath)) {
  throw new Error(
    "Report file not found. Please run `scripts/generate_report.ts` first.",
  )
}
const report = await fs.readFile(reportPath, "utf8")

// render
const output =
  `<!-- This file is generated from a template, please do not modify it directly. -->\n\n` +
  template.replace("<!-- report -->", report)

await fs.writeFile(path.resolve(rootDir, "README.md"), output)
