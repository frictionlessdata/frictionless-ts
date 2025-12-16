---
editUrl: false
next: false
prev: false
title: "validatePackage"
---

> **validatePackage**(`source`, `options?`): `Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>

Defined in: [frictionless/package/validate.ts:15](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/frictionless/package/validate.ts#L15)

## Parameters

### source

`string` | [`Descriptor`](/reference/frictionless-ts/descriptor/) | `Partial`\<[`Package`](/reference/frictionless-ts/package/)\>

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>
