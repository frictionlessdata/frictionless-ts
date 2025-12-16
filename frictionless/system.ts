import { DatabasePlugin } from "@frictionless-ts/database"
import { CkanPlugin } from "@frictionless-ts/dataset"
import { DatahubPlugin } from "@frictionless-ts/dataset"
import { DescriptorPlugin } from "@frictionless-ts/dataset"
import { FolderPlugin } from "@frictionless-ts/dataset"
import { GithubPlugin } from "@frictionless-ts/dataset"
import { ZenodoPlugin } from "@frictionless-ts/dataset"
import { ZipPlugin } from "@frictionless-ts/dataset"
import { CsvPlugin } from "@frictionless-ts/table"
import { ArrowPlugin } from "@frictionless-ts/table"
import { InlinePlugin } from "@frictionless-ts/table"
import { JsonPlugin } from "@frictionless-ts/table"
import { OdsPlugin } from "@frictionless-ts/table"
import { ParquetPlugin } from "@frictionless-ts/table"
import { XlsxPlugin } from "@frictionless-ts/table"
import type { Plugin } from "./plugin.ts"

export class System {
  plugins: Plugin[] = []

  register(PluginClass: new () => Plugin) {
    this.plugins.unshift(new PluginClass())
  }
}

export const system = new System()

// Dataset

system.register(CkanPlugin)
system.register(DatahubPlugin)
system.register(DescriptorPlugin)
system.register(GithubPlugin)
system.register(ZenodoPlugin)
system.register(FolderPlugin)
system.register(ZipPlugin)

// Table

system.register(ArrowPlugin)
system.register(CsvPlugin)
system.register(InlinePlugin)
system.register(JsonPlugin)
system.register(OdsPlugin)
system.register(ParquetPlugin)
system.register(XlsxPlugin)

// Mixed

system.register(DatabasePlugin)
