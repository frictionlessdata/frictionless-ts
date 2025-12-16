---
editUrl: false
next: false
prev: false
title: "validatePackageMetadata"
---

> **validatePackageMetadata**(`source`, `options?`): `Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/frictionless-ts/package/); `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: metadata/build/package/validate.d.ts:6

Validate a Package descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Package`](/reference/frictionless-ts/package/) | [`Descriptor`](/reference/frictionless-ts/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `dataPackage`: `undefined` \| [`Package`](/reference/frictionless-ts/package/); `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `valid`: `boolean`; \}\>
