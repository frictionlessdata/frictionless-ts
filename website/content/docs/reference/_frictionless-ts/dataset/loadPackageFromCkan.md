---
editUrl: false
next: false
prev: false
title: "loadPackageFromCkan"
---

> **loadPackageFromCkan**(`datasetUrl`): `Promise`\<\{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: [dataset/plugins/ckan/package/load.ts:11](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/ckan/package/load.ts#L11)

Load a package from a CKAN instance

## Parameters

### datasetUrl

`string`

## Returns

`Promise`\<\{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Package object and cleanup function
