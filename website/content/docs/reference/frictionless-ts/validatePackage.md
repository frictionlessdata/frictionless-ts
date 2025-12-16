---
editUrl: false
next: false
prev: false
title: "validatePackage"
---

> **validatePackage**(`source`, `options?`): `Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>

Defined in: [frictionless/package/validate.ts:15](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/frictionless/package/validate.ts#L15)

## Parameters

### source

`string` | [`Descriptor`](/reference/frictionless-ts/descriptor/) | `Partial`\<[`Package`](/reference/frictionless-ts/package/)\>

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>
