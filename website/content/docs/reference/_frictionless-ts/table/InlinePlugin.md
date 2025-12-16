---
editUrl: false
next: false
prev: false
title: "InlinePlugin"
---

Defined in: [table/plugins/inline/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/table/plugins/inline/plugin.ts#L5)

## Implements

- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Constructors

### Constructor

> **new InlinePlugin**(): `InlinePlugin`

#### Returns

`InlinePlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`key`: `string`\]: `any`; \}\>\>

Defined in: [table/plugins/inline/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/table/plugins/inline/plugin.ts#L6)

#### Parameters

##### resource

[`Resource`](/reference/frictionless-ts/resource/)

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`key`: `string`\]: `any`; \}\>\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`loadTable`](/reference/_frictionless-ts/table/tableplugin/#loadtable)
