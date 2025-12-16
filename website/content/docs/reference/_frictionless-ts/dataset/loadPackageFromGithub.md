---
editUrl: false
next: false
prev: false
title: "loadPackageFromGithub"
---

> **loadPackageFromGithub**(`repoUrl`, `options?`): `Promise`\<\{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: [dataset/plugins/github/package/load.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/github/package/load.ts#L12)

Load a package from a Github repository

## Parameters

### repoUrl

`string`

### options?

#### apiKey?

`string`

## Returns

`Promise`\<\{\[`key`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: [`Resource`](/reference/frictionless-ts/resource/)[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Package object
