---
editUrl: false
next: false
prev: false
title: "CsvPlugin"
---

Defined in: table/build/plugins/csv/plugin.d.ts:5

## Implements

- [`TablePlugin`](/reference/frictionless-ts/tableplugin/)

## Constructors

### Constructor

> **new CsvPlugin**(): `CsvPlugin`

#### Returns

`CsvPlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: table/build/plugins/csv/plugin.d.ts:6

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

Defined in: table/build/plugins/csv/plugin.d.ts:7

#### Parameters

##### table

[`Table`](/reference/frictionless-ts/table/)

##### options

[`SaveTableOptions`](/reference/frictionless-ts/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`saveTable`](/reference/frictionless-ts/tableplugin/#savetable)
