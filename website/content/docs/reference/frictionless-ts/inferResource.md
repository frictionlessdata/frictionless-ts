---
editUrl: false
next: false
prev: false
title: "inferResource"
---

> **inferResource**(`resource`, `options?`): `Promise`\<\{ `$schema?`: `string`; `bytes?`: `number`; `data?`: `unknown`; `description?`: `string`; `dialect?`: `string` \| [`Dialect`](/reference/frictionless-ts/dialect/); `encoding?`: `string`; `format?`: `string`; `hash?`: `string`; `jsonSchema?`: `string` \| [`Descriptor`](/reference/frictionless-ts/descriptor/); `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `mediatype?`: `string`; `name`: `string`; `path?`: `string` \| `string`[]; `schema?`: `string` \| [`Schema`](/reference/frictionless-ts/schema/); `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `type?`: `"table"`; \}\>

Defined in: [frictionless/resource/infer.ts:10](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/frictionless/resource/infer.ts#L10)

## Parameters

### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

### options?

[`InferDialectOptions`](/reference/frictionless-ts/inferdialectoptions/) & [`InferSchemaOptions`](/reference/frictionless-ts/inferschemaoptions/)

## Returns

`Promise`\<\{ `$schema?`: `string`; `bytes?`: `number`; `data?`: `unknown`; `description?`: `string`; `dialect?`: `string` \| [`Dialect`](/reference/frictionless-ts/dialect/); `encoding?`: `string`; `format?`: `string`; `hash?`: `string`; `jsonSchema?`: `string` \| [`Descriptor`](/reference/frictionless-ts/descriptor/); `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `mediatype?`: `string`; `name`: `string`; `path?`: `string` \| `string`[]; `schema?`: `string` \| [`Schema`](/reference/frictionless-ts/schema/); `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `type?`: `"table"`; \}\>
