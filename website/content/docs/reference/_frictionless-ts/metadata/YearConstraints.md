---
editUrl: false
next: false
prev: false
title: "YearConstraints"
---

Defined in: [field/types/Year.ts:16](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L16)

Year-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `number`[]

Defined in: [field/types/Year.ts:41](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L41)

Restrict values to a specified set of years
Can be an array of numbers or strings that parse to years

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string` \| `number`

Defined in: [field/types/Year.ts:35](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L35)

Exclusive maximum year value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string` \| `number`

Defined in: [field/types/Year.ts:30](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L30)

Exclusive minimum year value

***

### maximum?

> `optional` **maximum**: `string` \| `number`

Defined in: [field/types/Year.ts:25](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L25)

Maximum allowed year

***

### minimum?

> `optional` **minimum**: `string` \| `number`

Defined in: [field/types/Year.ts:20](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Year.ts#L20)

Minimum allowed year

***

### required?

> `optional` **required**: `boolean`

Defined in: [field/types/Base.ts:62](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L62)

Indicates if field is allowed to be null/empty

#### Inherited from

`BaseConstraints.required`

***

### unique?

> `optional` **unique**: `boolean`

Defined in: [field/types/Base.ts:67](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L67)

Indicates if values must be unique within the column

#### Inherited from

`BaseConstraints.unique`
