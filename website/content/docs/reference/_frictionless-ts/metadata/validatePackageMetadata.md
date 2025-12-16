---
editUrl: false
next: false
prev: false
title: "validatePackageMetadata"
---

> **validatePackageMetadata**(`source`, `options?`): `Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: [package/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/package/validate.ts#L12)

Validate a Package descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Package`](/reference/_frictionless-ts/metadata/package/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/_frictionless-ts/metadata/package/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>
