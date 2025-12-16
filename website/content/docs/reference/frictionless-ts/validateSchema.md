---
editUrl: false
next: false
prev: false
title: "validateSchema"
---

> **validateSchema**(`source`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/frictionless-ts/schema/); `valid`: `boolean`; \}\>

Defined in: metadata/build/schema/validate.d.ts:6

Validate a Schema descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Schema`](/reference/frictionless-ts/schema/) | [`Descriptor`](/reference/frictionless-ts/descriptor/)

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/frictionless-ts/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/frictionless-ts/schema/); `valid`: `boolean`; \}\>
