import { validateFile } from "@frictionless-ts/dataset"
import { validateDocument } from "@frictionless-ts/document"
import type { Descriptor, Resource } from "@frictionless-ts/metadata"
import { createReport } from "@frictionless-ts/metadata"
import {
  loadDescriptor,
  validateResourceMetadata,
} from "@frictionless-ts/metadata"
import { resolveBasepath } from "@frictionless-ts/metadata"
import type { InferSchemaOptions } from "@frictionless-ts/table"
import { validateTable } from "../table/index.ts"

export async function validateResource(
  source: string | Descriptor | Partial<Resource>,
  options?: InferSchemaOptions & { basepath?: string },
) {
  let descriptor = source
  let basepath = options?.basepath

  if (typeof descriptor === "string") {
    basepath = await resolveBasepath(descriptor)
    descriptor = await loadDescriptor(descriptor)
  }

  const report = await validateResourceMetadata(descriptor, { basepath })

  if (!report.resource) {
    return report
  }

  return await validateResourceData(report.resource, options)
}

export async function validateResourceData(
  resource: Partial<Resource>,
  options?: InferSchemaOptions,
) {
  const fileReport = await validateFile(resource)
  if (!fileReport.valid) {
    return fileReport
  }

  const tableReport = await validateTable(resource, options)
  if (!tableReport.valid) {
    return tableReport
  }

  const documentReport = await validateDocument(resource)
  if (!documentReport.valid) {
    return documentReport
  }

  return createReport()
}
