---
editUrl: false
next: false
prev: false
title: "BooleanConstraints"
---

Defined in: [field/types/Boolean.ts:26](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Boolean.ts#L26)

Boolean-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `boolean`[]

Defined in: [field/types/Boolean.ts:31](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Boolean.ts#L31)

Restrict values to a specified set
Can be an array of booleans or strings that parse to booleans

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
