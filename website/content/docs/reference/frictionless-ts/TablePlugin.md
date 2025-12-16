---
editUrl: false
next: false
prev: false
title: "TablePlugin"
---

Defined in: table/build/plugin.d.ts:17

## Extends

- `unknown`

## Methods

### inferDialect()?

> `optional` **inferDialect**(`resource`, `options?`): `Promise`\<`any`\>

Defined in: table/build/plugin.d.ts:23

#### Parameters

##### resource

`Resource`

##### options?

[`InferDialectOptions`](/reference/frictionless-ts/inferdialectoptions/)

#### Returns

`Promise`\<`any`\>

***

### inferSchema()?

> `optional` **inferSchema**(`resource`, `options?`): `Promise`\<`any`\>

Defined in: table/build/plugin.d.ts:24

#### Parameters

##### resource

`Resource`

##### options?

[`InferSchemaOptions`](/reference/frictionless-ts/inferschemaoptions/)

#### Returns

`Promise`\<`any`\>

***

### loadTable()?

> `optional` **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| [`Table`](/reference/frictionless-ts/table/)\>

Defined in: table/build/plugin.d.ts:25

#### Parameters

##### resource

`Resource`

##### options?

[`LoadTableOptions`](/reference/frictionless-ts/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| [`Table`](/reference/frictionless-ts/table/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: table/build/plugin.d.ts:18

#### Parameters

##### dataPackage

`Package`

##### options

`any`

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

***

### saveTable()?

> `optional` **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: table/build/plugin.d.ts:26

#### Parameters

##### table

[`Table`](/reference/frictionless-ts/table/)

##### options

[`SaveTableOptions`](/reference/frictionless-ts/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>
