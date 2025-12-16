---
editUrl: false
next: false
prev: false
title: "DurationConstraints"
---

Defined in: [field/types/Duration.ts:16](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Duration.ts#L16)

Duration-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/Duration.ts:31](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Duration.ts#L31)

Restrict values to a specified set of durations
Should be in ISO 8601 duration format

***

### maximum?

> `optional` **maximum**: `string`

Defined in: [field/types/Duration.ts:25](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Duration.ts#L25)

Maximum allowed duration (ISO 8601 format)

***

### minimum?

> `optional` **minimum**: `string`

Defined in: [field/types/Duration.ts:20](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Duration.ts#L20)

Minimum allowed duration (ISO 8601 format)

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
