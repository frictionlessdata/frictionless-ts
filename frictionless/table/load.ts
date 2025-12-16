import type { Resource } from "@frictionless-ts/metadata"
import type { LoadTableOptions } from "@frictionless-ts/table"
import { system } from "../system.ts"

export async function loadTable(
  resource: Partial<Resource>,
  options?: LoadTableOptions,
) {
  for (const plugin of system.plugins) {
    const table = await plugin.loadTable?.(resource, options)
    if (table) {
      return table
    }
  }

  return undefined
}
