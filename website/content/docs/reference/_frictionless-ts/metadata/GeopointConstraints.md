---
editUrl: false
next: false
prev: false
title: "GeopointConstraints"
---

Defined in: [field/types/Geopoint.ts:24](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Geopoint.ts#L24)

Geopoint-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `number`[][] \| `Record`\<`string`, `number`\>[]

Defined in: [field/types/Geopoint.ts:29](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Geopoint.ts#L29)

Restrict values to a specified set of geopoints
Format depends on the field's format setting

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
