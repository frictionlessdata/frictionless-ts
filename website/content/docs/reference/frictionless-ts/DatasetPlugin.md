---
editUrl: false
next: false
prev: false
title: "DatasetPlugin"
---

Defined in: dataset/build/plugin.d.ts:6

## Extended by

- [`TablePlugin`](/reference/frictionless-ts/tableplugin/)
- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Methods

### loadPackage()?

> `optional` **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: dataset/build/plugin.d.ts:7

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: dataset/build/plugin.d.ts:8

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

[`SavePackageOptions`](/reference/frictionless-ts/savepackageoptions/)

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>
