import { join } from "node:path"
import { loadPackageDescriptor } from "@frictionless-ts/metadata"

export async function loadPackageFromFolder(folderPath: string) {
  return loadPackageDescriptor(join(folderPath, "datapackage.json"))
}
