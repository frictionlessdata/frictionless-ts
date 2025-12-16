---
editUrl: false
next: false
prev: false
title: "DatasetPlugin"
---

Defined in: [dataset/plugin.ts:8](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugin.ts#L8)

## Extended by

- [`TablePlugin`](/reference/_frictionless-ts/table/tableplugin/)

## Methods

### loadPackage()?

> `optional` **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: [dataset/plugin.ts:9](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugin.ts#L9)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: [dataset/plugin.ts:11](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugin.ts#L11)

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

[`SavePackageOptions`](/reference/_frictionless-ts/dataset/savepackageoptions/)

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>
