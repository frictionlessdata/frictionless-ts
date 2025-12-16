import type { Package } from "@frictionless-ts/metadata"

export type SavePackageOptions = {
  target: string
  withRemote?: boolean
}

export interface DatasetPlugin {
  loadPackage?(source: string): Promise<Package | undefined>

  savePackage?(
    dataPackage: Package,
    options: SavePackageOptions,
  ): Promise<{ path?: string } | undefined>
}
