---
editUrl: false
next: false
prev: false
title: "CkanPlugin"
---

Defined in: dataset/build/plugins/ckan/plugin.d.ts:2

## Implements

- [`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/)

## Constructors

### Constructor

> **new CkanPlugin**(): `CkanPlugin`

#### Returns

`CkanPlugin`

## Methods

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| \{\[`x`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: `any`[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: `any`[]; `name?`: `string`; `resources`: `any`[]; `sources?`: `any`[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: dataset/build/plugins/ckan/plugin.d.ts:3

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| \{\[`x`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: `any`[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: `any`[]; `name?`: `string`; `resources`: `any`[]; `sources?`: `any`[]; `title?`: `string`; `version?`: `string`; \}\>

#### Implementation of

[`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/).[`loadPackage`](/reference/frictionless-ts/datasetplugin/#loadpackage)
