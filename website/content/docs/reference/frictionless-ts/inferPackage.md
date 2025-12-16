---
editUrl: false
next: false
prev: false
title: "inferPackage"
---

> **inferPackage**(`dataPackage`, `options?`): `Promise`\<\{ `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: `object`[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>

Defined in: [frictionless/package/infer.ts:14](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/frictionless/package/infer.ts#L14)

## Parameters

### dataPackage

`PartialPackage`

### options?

[`InferDialectOptions`](/reference/frictionless-ts/inferdialectoptions/) & [`InferSchemaOptions`](/reference/frictionless-ts/inferschemaoptions/)

## Returns

`Promise`\<\{ `$schema?`: `string`; `contributors?`: [`Contributor`](/reference/frictionless-ts/contributor/)[]; `created?`: `string`; `description?`: `string`; `homepage?`: `string`; `image?`: `string`; `keywords?`: `string`[]; `licenses?`: [`License`](/reference/frictionless-ts/license/)[]; `name?`: `string`; `resources`: `object`[]; `sources?`: [`Source`](/reference/frictionless-ts/source/)[]; `title?`: `string`; `version?`: `string`; \}\>
