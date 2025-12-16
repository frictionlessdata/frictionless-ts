---
editUrl: false
next: false
prev: false
title: "Resource"
---

Defined in: [resource/Resource.ts:12](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L12)

Data Resource interface built on top of the Data Package standard and Polars DataFrames

## See

https://datapackage.org/standard/data-resource/

## Extends

- `Metadata`

## Indexable

\[`key`: `` `${string}:${string}` ``\]: `any`

## Properties

### $schema?

> `optional` **$schema**: `string`

Defined in: [resource/Resource.ts:16](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L16)

JSON schema profile URL for validation

***

### bytes?

> `optional` **bytes**: `number`

Defined in: [resource/Resource.ts:73](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L73)

Size of the file in bytes

***

### data?

> `optional` **data**: `unknown`

Defined in: [resource/Resource.ts:34](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L34)

Inline data content instead of referencing an external file
Either path or data must be provided

***

### description?

> `optional` **description**: `string`

Defined in: [resource/Resource.ts:68](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L68)

A description of the resource

***

### dialect?

> `optional` **dialect**: `string` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/)

Defined in: [resource/Resource.ts:95](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L95)

Table dialect specification
Describes delimiters, quote characters, etc.

#### See

https://datapackage.org/standard/table-dialect/

***

### encoding?

> `optional` **encoding**: `string`

Defined in: [resource/Resource.ts:58](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L58)

Character encoding of the resource

#### Default

```ts
"utf-8"
```

***

### format?

> `optional` **format**: `string`

Defined in: [resource/Resource.ts:46](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L46)

The file format

#### Example

```ts
"csv", "json", "xlsx"
```

***

### hash?

> `optional` **hash**: `string`

Defined in: [resource/Resource.ts:78](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L78)

Hash of the resource data

***

### jsonSchema?

> `optional` **jsonSchema**: `string` \| [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

Defined in: [resource/Resource.ts:109](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L109)

Schema for the json data
Describes fields in the json, constraints, etc.

#### See

https://json-schema.org/

***

### licenses?

> `optional` **licenses**: [`License`](/reference/_frictionless-ts/metadata/license/)[]

Defined in: [resource/Resource.ts:88](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L88)

License information

***

### mediatype?

> `optional` **mediatype**: `string`

Defined in: [resource/Resource.ts:52](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L52)

The media type of the resource

#### Example

```ts
"text/csv", "application/json"
```

***

### name

> **name**: `string`

Defined in: [resource/Resource.ts:22](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L22)

Unique resource identifier
Should use lowercase alphanumeric characters, periods, hyphens, and underscores

***

### path?

> `optional` **path**: `string` \| `string`[]

Defined in: [resource/Resource.ts:28](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L28)

A reference to the data itself, can be a path URL or array of paths
Either path or data must be provided

***

### schema?

> `optional` **schema**: `string` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/)

Defined in: [resource/Resource.ts:102](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L102)

Schema for the tabular data
Describes fields in the table, constraints, etc.

#### See

https://datapackage.org/standard/table-schema/

***

### sources?

> `optional` **sources**: [`Source`](/reference/_frictionless-ts/metadata/source/)[]

Defined in: [resource/Resource.ts:83](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L83)

Data sources

***

### title?

> `optional` **title**: `string`

Defined in: [resource/Resource.ts:63](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L63)

Human-readable title

***

### type?

> `optional` **type**: `"table"`

Defined in: [resource/Resource.ts:40](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/Resource.ts#L40)

The resource type

#### Example

```ts
"table"
```
