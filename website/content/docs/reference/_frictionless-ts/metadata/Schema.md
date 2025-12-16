---
editUrl: false
next: false
prev: false
title: "Schema"
---

Defined in: [schema/Schema.ts:9](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L9)

Table Schema definition
Based on the specification at https://datapackage.org/standard/table-schema/

## Extends

- `Metadata`

## Indexable

\[`key`: `` `${string}:${string}` ``\]: `any`

## Properties

### $schema?

> `optional` **$schema**: `string`

Defined in: [schema/Schema.ts:13](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L13)

URL of profile (optional)

***

### description?

> `optional` **description**: `string`

Defined in: [schema/Schema.ts:28](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L28)

Description of schema (optional)

***

### fields

> **fields**: [`Field`](/reference/_frictionless-ts/metadata/field/)[]

Defined in: [schema/Schema.ts:33](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L33)

Fields in this schema (required)

***

### fieldsMatch?

> `optional` **fieldsMatch**: `"exact"` \| `"equal"` \| `"subset"` \| `"superset"` \| `"partial"`

Defined in: [schema/Schema.ts:39](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L39)

Field matching rule (optional)
Default: "exact"

***

### foreignKeys?

> `optional` **foreignKeys**: `ForeignKey`[]

Defined in: [schema/Schema.ts:62](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L62)

Foreign key relationships (optional)

***

### missingValues?

> `optional` **missingValues**: (`string` \| \{ `label`: `string`; `value`: `string`; \})[]

Defined in: [schema/Schema.ts:47](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L47)

Values representing missing data (optional)
Default: [""]
Can be a simple array of strings or an array of {value, label} objects
where label provides context for why the data is missing

***

### name?

> `optional` **name**: `string`

Defined in: [schema/Schema.ts:18](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L18)

Name of schema (optional)

***

### primaryKey?

> `optional` **primaryKey**: `string`[]

Defined in: [schema/Schema.ts:52](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L52)

Fields uniquely identifying each row (optional)

***

### title?

> `optional` **title**: `string`

Defined in: [schema/Schema.ts:23](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L23)

Title of schema (optional)

***

### uniqueKeys?

> `optional` **uniqueKeys**: `string`[][]

Defined in: [schema/Schema.ts:57](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/schema/Schema.ts#L57)

Field combinations that must be unique (optional)
