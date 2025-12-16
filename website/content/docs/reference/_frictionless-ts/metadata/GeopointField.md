---
editUrl: false
next: false
prev: false
title: "GeopointField"
---

Defined in: [field/types/Geopoint.ts:6](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Geopoint.ts#L6)

Geopoint field type

## Extends

- `BaseField`\<[`GeopointConstraints`](/reference/_frictionless-ts/metadata/geopointconstraints/)\>

## Indexable

\[`key`: `` `${string}:${string}` ``\]: `any`

## Properties

### constraints?

> `optional` **constraints**: [`GeopointConstraints`](/reference/_frictionless-ts/metadata/geopointconstraints/)

Defined in: [field/types/Base.ts:52](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L52)

Validation constraints applied to values

#### Inherited from

`BaseField.constraints`

***

### description?

> `optional` **description**: `string`

Defined in: [field/types/Base.ts:25](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L25)

Human-readable description

#### Inherited from

`BaseField.description`

***

### example?

> `optional` **example**: `any`

Defined in: [field/types/Base.ts:30](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L30)

Example value for this field

#### Inherited from

`BaseField.example`

***

### examples?

> `optional` **examples**: `any`[]

Defined in: [field/types/Base.ts:35](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L35)

Examples for this field

#### Inherited from

`BaseField.examples`

***

### format?

> `optional` **format**: `"object"` \| `"array"` \| `"default"`

Defined in: [field/types/Geopoint.ts:18](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Geopoint.ts#L18)

Format of the geopoint
- default: "lon,lat" string with comma separator
- array: [lon,lat] array
- object: {lon:x, lat:y} object

#### Overrides

`BaseField.format`

***

### missingValues?

> `optional` **missingValues**: (`string` \| \{ `label`: `string`; `value`: `string`; \})[]

Defined in: [field/types/Base.ts:47](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L47)

Values representing missing data for this field
Can be a simple array of strings or an array of {value, label} objects
where label provides context for why the data is missing

#### Inherited from

`BaseField.missingValues`

***

### name

> **name**: `string`

Defined in: [field/types/Base.ts:10](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L10)

Name of the field matching the column name

#### Inherited from

`BaseField.name`

***

### rdfType?

> `optional` **rdfType**: `string`

Defined in: [field/types/Base.ts:40](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L40)

URI for semantic type (RDF)

#### Inherited from

`BaseField.rdfType`

***

### title?

> `optional` **title**: `string`

Defined in: [field/types/Base.ts:20](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L20)

Human-readable title

#### Inherited from

`BaseField.title`

***

### type

> **type**: `"geopoint"`

Defined in: [field/types/Geopoint.ts:10](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Geopoint.ts#L10)

Field type - discriminator property
