---
editUrl: false
next: false
prev: false
title: "validatePackageMetadata"
---

> **validatePackageMetadata**(`source`, `options?`): `Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: [package/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/package/validate.ts#L12)

Validate a Package descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Package`](/reference/_frictionless-ts/metadata/package/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>
