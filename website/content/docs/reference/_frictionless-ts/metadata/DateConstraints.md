---
editUrl: false
next: false
prev: false
title: "DateConstraints"
---

Defined in: [field/types/Date.ts:24](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L24)

Date-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/Date.ts:49](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L49)

Restrict values to a specified set of dates
Should be in string date format (e.g., "YYYY-MM-DD")

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string`

Defined in: [field/types/Date.ts:43](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L43)

Exclusive maximum date value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string`

Defined in: [field/types/Date.ts:38](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L38)

Exclusive minimum date value

***

### maximum?

> `optional` **maximum**: `string`

Defined in: [field/types/Date.ts:33](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L33)

Maximum allowed date value

***

### minimum?

> `optional` **minimum**: `string`

Defined in: [field/types/Date.ts:28](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Date.ts#L28)

Minimum allowed date value

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
