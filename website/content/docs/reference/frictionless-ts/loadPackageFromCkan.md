---
editUrl: false
next: false
prev: false
title: "loadPackageFromCkan"
---

> **loadPackageFromCkan**(`datasetUrl`): `Promise`\<\{\[`x`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: `any`[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: `any`[]; `name?`: `string`; `resources`: `any`[]; `sources?`: `any`[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: dataset/build/plugins/ckan/package/load.d.ts:6

Load a package from a CKAN instance

## Parameters

### datasetUrl

`string`

## Returns

`Promise`\<\{\[`x`: `` `${string}:${string}` ``\]: `any`; `$schema?`: `string`; `contributors?`: `any`[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: `any`[]; `name?`: `string`; `resources`: `any`[]; `sources?`: `any`[]; `title?`: `string`; `version?`: `string`; \}\>

Package object and cleanup function
