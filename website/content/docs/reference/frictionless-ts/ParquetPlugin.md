---
editUrl: false
next: false
prev: false
title: "ParquetPlugin"
---

Defined in: table/build/plugins/parquet/plugin.d.ts:4

## Implements

- [`TablePlugin`](/reference/frictionless-ts/tableplugin/)

## Constructors

### Constructor

> **new ParquetPlugin**(): `ParquetPlugin`

#### Returns

`ParquetPlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: table/build/plugins/parquet/plugin.d.ts:5

#### Parameters

##### resource

`Resource`

##### options?

[`LoadTableOptions`](/reference/frictionless-ts/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`loadTable`](/reference/frictionless-ts/tableplugin/#loadtable)

***

### saveTable()

> **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: table/build/plugins/parquet/plugin.d.ts:6

#### Parameters

##### table

[`Table`](/reference/frictionless-ts/table/)

##### options

[`SaveTableOptions`](/reference/frictionless-ts/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`saveTable`](/reference/frictionless-ts/tableplugin/#savetable)
