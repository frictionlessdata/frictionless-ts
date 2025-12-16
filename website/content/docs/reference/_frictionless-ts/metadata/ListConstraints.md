---
editUrl: false
next: false
prev: false
title: "ListConstraints"
---

Defined in: [field/types/List.ts:33](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/List.ts#L33)

List-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `any`[][]

Defined in: [field/types/List.ts:48](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/List.ts#L48)

Restrict values to a specified set of lists
Either as delimited strings or arrays

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [field/types/List.ts:42](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/List.ts#L42)

Maximum number of list items

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [field/types/List.ts:37](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/List.ts#L37)

Minimum number of list items

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
