---
editUrl: false
next: false
prev: false
title: "validateResourceMetadata"
---

> **validateResourceMetadata**(`source`, `options?`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/_frictionless-ts/metadata/resource/); `valid`: `boolean`; \}\>

Defined in: [resource/validate.ts:15](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/resource/validate.ts#L15)

Validate a Resource descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Resource`](/reference/_frictionless-ts/metadata/resource/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/_frictionless-ts/metadata/resource/); `valid`: `boolean`; \}\>
