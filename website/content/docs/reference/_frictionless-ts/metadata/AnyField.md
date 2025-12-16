---
editUrl: false
next: false
prev: false
title: "AnyField"
---

Defined in: [field/types/Any.ts:6](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Any.ts#L6)

Any field type (unspecified/mixed)

## Extends

- `BaseField`\<[`AnyConstraints`](/reference/_frictionless-ts/metadata/anyconstraints/)\>

## Indexable

\[`key`: `` `${string}:${string}` ``\]: `any`

## Properties

### constraints?

> `optional` **constraints**: [`AnyConstraints`](/reference/_frictionless-ts/metadata/anyconstraints/)

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

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`description`](/reference/_frictionless-ts/metadata/arrayfield/#description)

***

### example?

> `optional` **example**: `any`

Defined in: [field/types/Base.ts:30](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L30)

Example value for this field

#### Inherited from

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`example`](/reference/_frictionless-ts/metadata/arrayfield/#example)

***

### examples?

> `optional` **examples**: `any`[]

Defined in: [field/types/Base.ts:35](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L35)

Examples for this field

#### Inherited from

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`examples`](/reference/_frictionless-ts/metadata/arrayfield/#examples)

***

### format?

> `optional` **format**: `string`

Defined in: [field/types/Base.ts:15](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L15)

Field format -- optional addition to the type

#### Inherited from

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`format`](/reference/_frictionless-ts/metadata/arrayfield/#format)

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

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`name`](/reference/_frictionless-ts/metadata/arrayfield/#name)

***

### rdfType?

> `optional` **rdfType**: `string`

Defined in: [field/types/Base.ts:40](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L40)

URI for semantic type (RDF)

#### Inherited from

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`rdfType`](/reference/_frictionless-ts/metadata/arrayfield/#rdftype)

***

### title?

> `optional` **title**: `string`

Defined in: [field/types/Base.ts:20](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Base.ts#L20)

Human-readable title

#### Inherited from

[`ArrayField`](/reference/_frictionless-ts/metadata/arrayfield/).[`title`](/reference/_frictionless-ts/metadata/arrayfield/#title)

***

### type?

> `optional` **type**: `"any"`

Defined in: [field/types/Any.ts:10](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/field/types/Any.ts#L10)

Field type - discriminator property
