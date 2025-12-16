---
editUrl: false
next: false
prev: false
title: "StringField"
---

Defined in: [field/types/String.ts:6](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/String.ts#L6)

String field type

## Extends

- `BaseField`\<[`StringConstraints`](/reference/_frictionless-ts/metadata/stringconstraints/)\>

## Indexable

\[`key`: `` `${string}:${string}` ``\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[] \| `object`[]

Defined in: [field/types/String.ts:25](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/String.ts#L25)

Categories for enum values
Can be an array of string values or an array of {value, label} objects

***

### categoriesOrdered?

> `optional` **categoriesOrdered**: `boolean`

Defined in: [field/types/String.ts:30](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/String.ts#L30)

Whether categories should be considered to have a natural order

***

### constraints?

> `optional` **constraints**: [`StringConstraints`](/reference/_frictionless-ts/metadata/stringconstraints/)

Defined in: [field/types/Base.ts:52](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L52)

Validation constraints applied to values

#### Inherited from

`BaseField.constraints`

***

### description?

> `optional` **description**: `string`

Defined in: [field/types/Base.ts:25](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L25)

Human-readable description

#### Inherited from

`BaseField.description`

***

### example?

> `optional` **example**: `any`

Defined in: [field/types/Base.ts:30](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L30)

Example value for this field

#### Inherited from

`BaseField.example`

***

### examples?

> `optional` **examples**: `any`[]

Defined in: [field/types/Base.ts:35](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L35)

Examples for this field

#### Inherited from

`BaseField.examples`

***

### format?

> `optional` **format**: `"email"` \| `"uri"` \| `"binary"` \| `"uuid"`

Defined in: [field/types/String.ts:19](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/String.ts#L19)

Format of the string
- email: valid email address
- uri: valid URI
- binary: base64 encoded string
- uuid: valid UUID string

#### Overrides

`BaseField.format`

***

### missingValues?

> `optional` **missingValues**: (`string` \| \{ `label`: `string`; `value`: `string`; \})[]

Defined in: [field/types/Base.ts:47](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L47)

Values representing missing data for this field
Can be a simple array of strings or an array of {value, label} objects
where label provides context for why the data is missing

#### Inherited from

`BaseField.missingValues`

***

### name

> **name**: `string`

Defined in: [field/types/Base.ts:10](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L10)

Name of the field matching the column name

#### Inherited from

`BaseField.name`

***

### rdfType?

> `optional` **rdfType**: `string`

Defined in: [field/types/Base.ts:40](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L40)

URI for semantic type (RDF)

#### Inherited from

`BaseField.rdfType`

***

### title?

> `optional` **title**: `string`

Defined in: [field/types/Base.ts:20](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L20)

Human-readable title

#### Inherited from

`BaseField.title`

***

### type

> **type**: `"string"`

Defined in: [field/types/String.ts:10](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/String.ts#L10)

Field type - discriminator property
