---
editUrl: false
next: false
prev: false
title: "ZenodoPlugin"
---

Defined in: [dataset/plugins/zenodo/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/zenodo/plugin.ts#L5)

## Implements

- [`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/)

## Constructors

### Constructor

> **new ZenodoPlugin**(): `ZenodoPlugin`

#### Returns

`ZenodoPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| \{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: [dataset/plugins/zenodo/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/zenodo/plugin.ts#L6)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| \{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`loadPackage`](/reference/_frictionless-ts/dataset/datasetplugin/#loadpackage)
