---
editUrl: false
next: false
prev: false
title: "GeojsonConstraints"
---

Defined in: [field/types/Geojson.ts:23](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Geojson.ts#L23)

GeoJSON-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `Record`\<`string`, `any`\>[]

Defined in: [field/types/Geojson.ts:33](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Geojson.ts#L33)

Restrict values to a specified set of GeoJSON objects
Serialized as strings or GeoJSON object literals

***

### jsonSchema?

> `optional` **jsonSchema**: `Record`\<`string`, `any`\>

Defined in: [field/types/Geojson.ts:27](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Geojson.ts#L27)

JSON Schema object for validating the object structure and properties

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
