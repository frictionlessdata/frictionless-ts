---
editUrl: false
next: false
prev: false
title: "validateResourceMetadata"
---

> **validateResourceMetadata**(`source`, `options?`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/_frictionless-ts/metadata/resource/); `valid`: `boolean`; \}\>

Defined in: [resource/validate.ts:15](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/resource/validate.ts#L15)

Validate a Resource descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Resource`](/reference/_frictionless-ts/metadata/resource/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/_frictionless-ts/metadata/resource/); `valid`: `boolean`; \}\>
