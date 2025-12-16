---
editUrl: false
next: false
prev: false
title: "validateResourceMetadata"
---

> **validateResourceMetadata**(`source`, `options?`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/frictionless-ts/resource/); `valid`: `boolean`; \}\>

Defined in: metadata/build/resource/validate.d.ts:7

Validate a Resource descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Resource`](/reference/frictionless-ts/resource/) | [`Descriptor`](/reference/frictionless-ts/descriptor/)

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `resource`: `undefined` \| [`Resource`](/reference/frictionless-ts/resource/); `valid`: `boolean`; \}\>
