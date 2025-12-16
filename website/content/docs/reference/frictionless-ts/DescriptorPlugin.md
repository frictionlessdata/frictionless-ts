---
editUrl: false
next: false
prev: false
title: "DescriptorPlugin"
---

Defined in: dataset/build/plugins/descriptor/plugin.d.ts:3

## Implements

- [`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/)

## Constructors

### Constructor

> **new DescriptorPlugin**(): `DescriptorPlugin`

#### Returns

`DescriptorPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`any`\>

Defined in: dataset/build/plugins/descriptor/plugin.d.ts:4

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/).[`loadPackage`](/reference/frictionless-ts/datasetplugin/#loadpackage)

***

### savePackage()

> **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path`: `string`; \}\>

Defined in: dataset/build/plugins/descriptor/plugin.d.ts:5

#### Parameters

##### dataPackage

`Package`

##### options

###### target

`string`

###### withRemote?

`boolean`

#### Returns

`Promise`\<`undefined` \| \{ `path`: `string`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/).[`savePackage`](/reference/frictionless-ts/datasetplugin/#savepackage)
