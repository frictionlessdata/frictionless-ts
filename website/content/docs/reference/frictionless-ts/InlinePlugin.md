---
editUrl: false
next: false
prev: false
title: "InlinePlugin"
---

Defined in: table/build/plugins/inline/plugin.d.ts:3

## Implements

- [`TablePlugin`](/reference/frictionless-ts/tableplugin/)

## Constructors

### Constructor

> **new InlinePlugin**(): `InlinePlugin`

#### Returns

`InlinePlugin`

## Methods

### loadTable()

> **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`x`: `string`\]: `any`; \}\>\>

Defined in: table/build/plugins/inline/plugin.d.ts:4

#### Parameters

##### resource

[`Resource`](/reference/frictionless-ts/resource/)

##### options?

[`LoadTableOptions`](/reference/frictionless-ts/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<\{\[`x`: `string`\]: `any`; \}\>\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`loadTable`](/reference/frictionless-ts/tableplugin/#loadtable)
