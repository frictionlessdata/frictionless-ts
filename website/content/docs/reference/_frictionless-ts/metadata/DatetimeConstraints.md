---
editUrl: false
next: false
prev: false
title: "DatetimeConstraints"
---

Defined in: [field/types/Datetime.ts:24](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L24)

Datetime-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/Datetime.ts:49](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L49)

Restrict values to a specified set of datetimes
Should be in string datetime format (e.g., ISO8601)

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string`

Defined in: [field/types/Datetime.ts:43](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L43)

Exclusive maximum datetime value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string`

Defined in: [field/types/Datetime.ts:38](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L38)

Exclusive minimum datetime value

***

### maximum?

> `optional` **maximum**: `string`

Defined in: [field/types/Datetime.ts:33](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L33)

Maximum allowed datetime value

***

### minimum?

> `optional` **minimum**: `string`

Defined in: [field/types/Datetime.ts:28](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Datetime.ts#L28)

Minimum allowed datetime value

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
