import type { Resource } from "@frictionless-ts/metadata"
import type { UnboundError } from "@frictionless-ts/metadata"
import { resolveSchema } from "@frictionless-ts/metadata"
import { createReport } from "@frictionless-ts/metadata"
import { inspectTable } from "@frictionless-ts/table"
import type { LoadTableOptions } from "@frictionless-ts/table"
import { inferSchema } from "../schema/index.ts"
import { loadTable } from "./load.ts"

export async function validateTable(
  resource: Partial<Resource>,
  options?: LoadTableOptions & { maxErrors?: number },
) {
  const { maxErrors } = options ?? {}

  const errors: UnboundError[] = []
  const table = await loadTable(resource, { denormalized: true })

  if (table) {
    let schema = await resolveSchema(resource.schema)
    if (!schema) schema = await inferSchema(resource, options)
    const tableErrors = await inspectTable(table, { schema, maxErrors })
    errors.push(...tableErrors)
  }

  // TODO: review
  if (!table && resource.schema) {
    errors.push({
      type: "data",
      message: `missing ${resource.name} table`,
    })
  }

  return createReport(errors, { maxErrors })
}
