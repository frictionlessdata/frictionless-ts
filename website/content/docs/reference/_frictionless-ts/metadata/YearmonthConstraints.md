---
editUrl: false
next: false
prev: false
title: "YearmonthConstraints"
---

Defined in: [field/types/Yearmonth.ts:16](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L16)

Yearmonth-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/Yearmonth.ts:41](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L41)

Restrict values to a specified set of yearmonths
Should be in string format (e.g., "YYYY-MM")

***

### exclusiveMaximum?

> `optional` **exclusiveMaximum**: `string`

Defined in: [field/types/Yearmonth.ts:35](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L35)

Exclusive maximum yearmonth value

***

### exclusiveMinimum?

> `optional` **exclusiveMinimum**: `string`

Defined in: [field/types/Yearmonth.ts:30](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L30)

Exclusive minimum yearmonth value

***

### maximum?

> `optional` **maximum**: `string`

Defined in: [field/types/Yearmonth.ts:25](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L25)

Maximum allowed yearmonth value (format: YYYY-MM)

***

### minimum?

> `optional` **minimum**: `string`

Defined in: [field/types/Yearmonth.ts:20](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/field/types/Yearmonth.ts#L20)

Minimum allowed yearmonth value (format: YYYY-MM)

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
