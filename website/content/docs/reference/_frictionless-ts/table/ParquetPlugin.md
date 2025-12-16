---
editUrl: false
next: false
prev: false
title: "ParquetPlugin"
---

Defined in: [table/plugins/parquet/plugin.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/parquet/plugin.ts#L12)

## Implements

- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Constructors

### Constructor

> **new ParquetPlugin**(): `ParquetPlugin`

#### Returns

`ParquetPlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: [table/plugins/parquet/plugin.ts:13](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/parquet/plugin.ts#L13)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/_frictionless-ts/metadata/resource/)\>

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`loadTable`](/reference/_frictionless-ts/table/tableplugin/#loadtable)

***

### saveTable()

> **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: [table/plugins/parquet/plugin.ts:20](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/parquet/plugin.ts#L20)

#### Parameters

##### table

[`Table`](/reference/_frictionless-ts/table/table/)

##### options

[`SaveTableOptions`](/reference/_frictionless-ts/table/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`saveTable`](/reference/_frictionless-ts/table/tableplugin/#savetable)
