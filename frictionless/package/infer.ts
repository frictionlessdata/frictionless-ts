import os from "node:os"
import type { Package, Resource } from "@frictionless-ts/metadata"
import type { InferDialectOptions } from "@frictionless-ts/table"
import type { InferSchemaOptions } from "@frictionless-ts/table"
import pAll from "p-all"
import { inferResource } from "../resource/index.ts"

// TODO: Move PartialPackage/Resource to @frictionless-ts/metadata?

interface PartialPackage extends Omit<Package, "resources"> {
  resources: Partial<Resource>[]
}

export async function inferPackage(
  dataPackage: PartialPackage,
  options?: InferDialectOptions & InferSchemaOptions,
) {
  const concurrency = os.cpus().length

  const resources = await pAll(
    dataPackage.resources.map(
      resource => () => inferResource(resource, options),
    ),
    { concurrency },
  )

  const result = {
    ...dataPackage,
    resources,
  }

  return result
}
