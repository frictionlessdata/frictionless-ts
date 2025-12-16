---
editUrl: false
next: false
prev: false
title: "validateSchema"
---

> **validateSchema**(`source`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/); `valid`: `boolean`; \}\>

Defined in: [schema/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/schema/validate.ts#L12)

Validate a Schema descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Schema`](/reference/_frictionless-ts/metadata/schema/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/); `valid`: `boolean`; \}\>
