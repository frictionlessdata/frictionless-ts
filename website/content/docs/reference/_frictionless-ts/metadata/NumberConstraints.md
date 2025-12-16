---
editUrl: false
next: false
prev: false
title: "NumberConstraints"
---

Defined in: [field/types/Number.ts:31](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L31)

Number-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `number`[]

Defined in: [field/types/Number.ts:56](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L56)

Restrict values to a specified set
Can be an array of numbers or strings that parse to numbers

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string` \| `number`

Defined in: [field/types/Number.ts:50](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L50)

Exclusive maximum allowed value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string` \| `number`

Defined in: [field/types/Number.ts:45](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L45)

Exclusive minimum allowed value

***

### maximum?

> `optional` **maximum**: `string` \| `number`

Defined in: [field/types/Number.ts:40](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L40)

Maximum allowed value

***

### minimum?

> `optional` **minimum**: `string` \| `number`

Defined in: [field/types/Number.ts:35](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Number.ts#L35)

Minimum allowed value

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
