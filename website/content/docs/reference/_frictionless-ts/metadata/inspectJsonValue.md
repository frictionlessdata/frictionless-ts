---
editUrl: false
next: false
prev: false
title: "inspectJsonValue"
---

> **inspectJsonValue**(`value`, `options`): `Promise`\<`object`[]\>

Defined in: [json/inspect/value.ts:9](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/metadata/json/inspect/value.ts#L9)

Validate a value against a JSON Schema
It uses Ajv for JSON Schema validation under the hood

## Parameters

### value

`unknown`

### options

#### jsonSchema

`string` \| [`Descriptor`](/reference/_frictionless-ts/metadata/descriptor/)

## Returns

`Promise`\<`object`[]\>
