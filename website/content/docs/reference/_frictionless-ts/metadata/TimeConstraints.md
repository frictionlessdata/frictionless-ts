---
editUrl: false
next: false
prev: false
title: "TimeConstraints"
---

Defined in: [field/types/Time.ts:24](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L24)

Time-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/Time.ts:49](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L49)

Restrict values to a specified set of times
Should be in string time format (e.g., "HH:MM:SS")

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string`

Defined in: [field/types/Time.ts:43](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L43)

Exclusive maximum time value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string`

Defined in: [field/types/Time.ts:38](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L38)

Exclusive minimum time value

***

### maximum?

> `optional` **maximum**: `string`

Defined in: [field/types/Time.ts:33](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L33)

Maximum allowed time value

***

### minimum?

> `optional` **minimum**: `string`

Defined in: [field/types/Time.ts:28](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Time.ts#L28)

Minimum allowed time value

***

### required?

> `optional` **required**: `boolean`

Defined in: [field/types/Base.ts:62](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Base.ts#L62)

Indicates if field is allowed to be null/empty

#### Inherited from

`BaseConstraints.required`

***

### unique?

> `optional` **unique**: `boolean`

Defined in: [field/types/Base.ts:67](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Base.ts#L67)

Indicates if values must be unique within the column

#### Inherited from

`BaseConstraints.unique`
