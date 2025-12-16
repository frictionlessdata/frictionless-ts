---
editUrl: false
next: false
prev: false
title: "InlinePlugin"
---

Defined in: [table/plugins/inline/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugins/inline/plugin.ts#L5)

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

Defined in: [table/plugins/inline/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugins/inline/plugin.ts#L6)

#### Parameters

##### resource

[`Resource`](/reference/frictionless-ts/resource/)

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`key`: `string`\]: `any`; \}\>\>

#### Implementation of

[`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/).[`loadTable`](/reference/_frictionless-ts/table/tableplugin/#loadtable)
