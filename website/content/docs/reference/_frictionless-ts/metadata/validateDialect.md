---
editUrl: false
next: false
prev: false
title: "validateDialect"
---

> **validateDialect**(`source`): `Promise`\<\{ `dialect`: `undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: [dialect/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/dialect/validate.ts#L12)

Validate a Dialect descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Dialect`](/reference/_frictionless-ts/metadata/dialect/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

## Returns

`Promise`\<\{ `dialect`: `undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>
