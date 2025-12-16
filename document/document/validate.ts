import type { Resource } from "@frictionless-ts/metadata"
import type { DataError } from "@frictionless-ts/metadata"
import type { JsonDocumentError } from "@frictionless-ts/metadata"
import { createReport } from "@frictionless-ts/metadata"
import { resolveJsonSchema } from "@frictionless-ts/metadata"
import { inspectJsonValue } from "@frictionless-ts/metadata"

export async function validateDocument(resource: Partial<Resource>) {
  if (resource.jsonSchema) {
    const jsonSchema = await resolveJsonSchema(resource.jsonSchema)

    if (!resource.data) {
      return createReport<DataError>([
        {
          type: "data",
          message: `missing ${resource.name} data`,
        },
      ])
    }

    if (jsonSchema) {
      const errors = await inspectJsonValue(resource.data, { jsonSchema })

      return createReport<JsonDocumentError>(
        errors.map(error => ({
          type: "document/json",
          ...error,
        })),
      )
    }
  }

  return createReport()
}
