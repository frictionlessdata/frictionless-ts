---
editUrl: false
next: false
prev: false
title: "validateDialect"
---

> **validateDialect**(`source`): `Promise`\<\{ `dialect`: `undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>

Defined in: [dialect/validate.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/dialect/validate.ts#L12)

Validate a Dialect descriptor (JSON Object) against its profile

## Parameters

### source

`string` | [`Dialect`](/reference/_frictionless-ts/metadata/dialect/) | [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

## Returns

`Promise`\<\{ `dialect`: `undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/); `errors`: [`MetadataError`](/reference/_frictionless-ts/metadata/metadataerror/)[]; `valid`: `boolean`; \}\>
