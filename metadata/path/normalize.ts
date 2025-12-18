import { node } from "../platform/index.ts"
import { isRemotePath } from "./path.ts"

export function normalizePath(path: string, options: { basepath?: string }) {
  const isPathRemote = isRemotePath(path)
  const isBasepathRemote = isRemotePath(options.basepath ?? "")

  if (isPathRemote) {
    return new URL(path).toString()
  }

  if (isBasepathRemote) {
    const normalizedPath = new URL(
      [options.basepath, path].join("/"),
    ).toString()

    if (!normalizedPath.startsWith(options.basepath ?? "")) {
      throw new Error(`Path ${path} is not a subpath of ${options.basepath}`)
    }

    return normalizedPath
  }

  if (!node) {
    throw new Error("File system is not supported in this environment")
  }

  const normalizedPath = options.basepath
    ? node.path.join(options.basepath, path)
    : path

  const relativePath = node.path.relative(
    options.basepath ?? "",
    normalizedPath,
  )

  if (relativePath.startsWith("..")) {
    throw new Error(`Path ${path} is not a subpath of ${options.basepath}`)
  }

  return node.path.relative(process.cwd(), node.path.resolve(normalizedPath))
}
