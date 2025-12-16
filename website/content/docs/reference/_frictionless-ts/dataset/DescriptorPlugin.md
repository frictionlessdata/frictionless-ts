---
editUrl: false
next: false
prev: false
title: "DescriptorPlugin"
---

Defined in: [dataset/plugins/descriptor/plugin.ts:8](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/dataset/plugins/descriptor/plugin.ts#L8)

## Implements

- [`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/)

## Constructors

### Constructor

> **new DescriptorPlugin**(): `DescriptorPlugin`

#### Returns

`DescriptorPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: [dataset/plugins/descriptor/plugin.ts:9](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/dataset/plugins/descriptor/plugin.ts#L9)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`loadPackage`](/reference/_frictionless-ts/dataset/datasetplugin/#loadpackage)

***

### savePackage()

> **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path`: `string`; \}\>

Defined in: [dataset/plugins/descriptor/plugin.ts:17](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/dataset/plugins/descriptor/plugin.ts#L17)

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

###### target

`string`

###### withRemote?

`boolean`

#### Returns

`Promise`\<`undefined` \| \{ `path`: `string`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`savePackage`](/reference/_frictionless-ts/dataset/datasetplugin/#savepackage)
