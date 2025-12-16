---
editUrl: false
next: false
prev: false
title: "validatePackage"
---

> **validatePackage**(`source`, `options?`): `Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>

Defined in: [frictionless/package/validate.ts:15](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/frictionless/package/validate.ts#L15)

## Parameters

### source

`string` | [`Descriptor`](/reference/frictionless-ts/descriptor/) | `Partial`\<[`Package`](/reference/frictionless-ts/package/)\>

### options?

#### basepath?

`string`

## Returns

`Promise`\<\{ `errors`: [`BoundError`](/reference/frictionless-ts/bounderror/)[]; `valid`: `boolean`; \} \| \{ `errors`: `object`[]; `valid`: `boolean`; \}\>
