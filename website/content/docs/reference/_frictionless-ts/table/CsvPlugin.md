---
editUrl: false
next: false
prev: false
title: "CsvPlugin"
---

Defined in: [table/plugins/csv/plugin.ts:8](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/table/plugins/csv/plugin.ts#L8)

## Implements

- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Constructors

### Constructor

> **new CsvPlugin**(): `CsvPlugin`

#### Returns

`CsvPlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: [table/plugins/csv/plugin.ts:9](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/table/plugins/csv/plugin.ts#L9)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`loadTable`](/reference/_frictionless-ts/table/tableplugin/#loadtable)

***

### saveTable()

> **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: [table/plugins/csv/plugin.ts:16](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/table/plugins/csv/plugin.ts#L16)

#### Parameters

##### table

[`Table`](/reference/_frictionless-ts/table/table/)

##### options

[`SaveTableOptions`](/reference/_frictionless-ts/table/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`saveTable`](/reference/_frictionless-ts/table/tableplugin/#savetable)
