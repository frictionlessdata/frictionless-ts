---
editUrl: false
next: false
prev: false
title: "inspectJsonValue"
---

> **inspectJsonValue**(`value`, `options`): `Promise`\<`object`[]\>

Defined in: [json/inspect/value.ts:9](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/json/inspect/value.ts#L9)

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
