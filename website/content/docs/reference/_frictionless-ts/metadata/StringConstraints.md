---
editUrl: false
next: false
prev: false
title: "StringConstraints"
---

Defined in: [field/types/String.ts:36](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/String.ts#L36)

String-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[]

Defined in: [field/types/String.ts:55](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/String.ts#L55)

Restrict values to a specified set of strings

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [field/types/String.ts:45](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/String.ts#L45)

Maximum string length

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [field/types/String.ts:40](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/String.ts#L40)

Minimum string length

***

### pattern?

> `optional` **pattern**: `string`

Defined in: [field/types/String.ts:50](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/String.ts#L50)

Regular expression pattern to match

***

### required?

> `optional` **required**: `boolean`

Defined in: [field/types/Base.ts:62](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L62)

Indicates if field is allowed to be null/empty

#### Inherited from

`BaseConstraints.required`

***

### unique?

> `optional` **unique**: `boolean`

Defined in: [field/types/Base.ts:67](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L67)

Indicates if values must be unique within the column

#### Inherited from

`BaseConstraints.unique`
