---
editUrl: false
next: false
prev: false
title: "GithubPlugin"
---

Defined in: [dataset/plugins/github/plugin.ts:5](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugins/github/plugin.ts#L5)

## Implements

- [`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/)

## Constructors

### Constructor

> **new GithubPlugin**(): `GithubPlugin`

#### Returns

`GithubPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| \{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: [dataset/plugins/github/plugin.ts:6](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugins/github/plugin.ts#L6)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| \{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`loadPackage`](/reference/_frictionless-ts/dataset/datasetplugin/#loadpackage)
