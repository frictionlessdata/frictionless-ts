import type { FrictionlessError } from "../error/index.ts"

export interface Report<T extends FrictionlessError = FrictionlessError> {
  valid: boolean
  errors: T[]
}
