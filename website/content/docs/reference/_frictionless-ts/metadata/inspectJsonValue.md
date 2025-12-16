---
editUrl: false
next: false
prev: false
title: "inspectJsonValue"
---

> **inspectJsonValue**(`value`, `options`): `Promise`\<`object`[]\>

Defined in: [json/inspect/value.ts:9](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/json/inspect/value.ts#L9)

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
