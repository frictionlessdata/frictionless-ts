---
editUrl: false
next: false
prev: false
title: "InlinePlugin"
---

Defined in: [table/plugins/inline/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/inline/plugin.ts#L5)

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

Defined in: [table/plugins/inline/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugins/inline/plugin.ts#L6)

#### Parameters

##### resource

[`Resource`](/reference/_frictionless-ts/metadata/resource/)

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`key`: `string`\]: `any`; \}\>\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`loadTable`](/reference/_frictionless-ts/table/tableplugin/#loadtable)
