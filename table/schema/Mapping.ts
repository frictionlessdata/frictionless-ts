import type { Schema } from "@frictionless-ts/metadata"
import type { PolarsSchema } from "./Schema.ts"

export interface SchemaMapping {
  source: PolarsSchema
  target: Schema
}
