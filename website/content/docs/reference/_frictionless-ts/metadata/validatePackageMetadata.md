---
editUrl: false
next: false
prev: false
title: "validatePackageMetadata"
---

> **validatePackageMetadata**(`source`, `options?`): `Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: [package/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/package/validate.ts#L12)

Validate a Package descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Package`](/reference/_frictionless-ts/metadata/package/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>
