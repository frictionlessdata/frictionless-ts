---
editUrl: false
next: false
prev: false
title: "ArrowPlugin"
---

Defined in: [table/plugins/arrow/plugin.ts:11](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/arrow/plugin.ts#L11)

## Implements

- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Constructors

### Constructor

> **new ArrowPlugin**(): `ArrowPlugin`

#### Returns

`ArrowPlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: [table/plugins/arrow/plugin.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/arrow/plugin.ts#L12)

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

Defined in: [table/plugins/arrow/plugin.ts:19](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/arrow/plugin.ts#L19)

#### Parameters

##### table

[`Table`](/reference/_frictionless-ts/table/table/)

##### options

[`SaveTableOptions`](/reference/_frictionless-ts/table/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`saveTable`](/reference/_frictionless-ts/table/tableplugin/#savetable)
