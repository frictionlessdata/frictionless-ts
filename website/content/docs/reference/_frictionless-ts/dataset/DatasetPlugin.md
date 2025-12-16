---
editUrl: false
next: false
prev: false
title: "DatasetPlugin"
---

Defined in: [dataset/plugin.ts:8](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugin.ts#L8)

## Methods

### loadPackage()?

> `optional` **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: [dataset/plugin.ts:9](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugin.ts#L9)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: [dataset/plugin.ts:11](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugin.ts#L11)

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

[`SavePackageOptions`](/reference/_frictionless-ts/dataset/savepackageoptions/)

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>
