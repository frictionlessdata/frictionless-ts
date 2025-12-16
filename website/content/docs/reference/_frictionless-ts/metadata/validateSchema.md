---
editUrl: false
next: false
prev: false
title: "validateSchema"
---

> **validateSchema**(`source`): `Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/); `valid`: `boolean`; \}\>

Defined in: [schema/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/schema/validate.ts#L12)

Validate a Schema descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Schema`](/reference/_frictionless-ts/metadata/schema/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

## Returns

`Promise`\<\{ `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `schema`: `undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/); `valid`: `boolean`; \}\>
