---
editUrl: false
next: false
prev: false
title: "ZipPlugin"
---

Defined in: [dataset/plugins/zip/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/zip/plugin.ts#L5)

## Implements

- [`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/)

## Constructors

### Constructor

> **new ZipPlugin**(): `ZipPlugin`

#### Returns

`ZipPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: [dataset/plugins/zip/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/zip/plugin.ts#L6)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`loadPackage`](/reference/_frictionless-ts/dataset/datasetplugin/#loadpackage)

***

### savePackage()

> **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path`: `undefined`; \}\>

Defined in: [dataset/plugins/zip/plugin.ts:14](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/zip/plugin.ts#L14)

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

###### target

`string`

###### withRemote?

`boolean`

#### Returns

`Promise`\<`undefined` \| \{ `path`: `undefined`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`savePackage`](/reference/_frictionless-ts/dataset/datasetplugin/#savepackage)
