---
editUrl: false
next: false
prev: false
title: "TablePlugin"
---

Defined in: table/build/plugin.d.ts:17

## Extends

- [`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/)

## Methods

### inferDialect()?

> `optional` **inferDialect**(`resource`, `options?`): `Promise`\<`undefined` \| [`Dialect`](/reference/frictionless-ts/dialect/)\>

Defined in: table/build/plugin.d.ts:23

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`InferDialectOptions`](/reference/frictionless-ts/inferdialectoptions/)

#### Returns

`Promise`\<`undefined` \| [`Dialect`](/reference/frictionless-ts/dialect/)\>

***

### inferSchema()?

> `optional` **inferSchema**(`resource`, `options?`): `Promise`\<`undefined` \| [`Schema`](/reference/frictionless-ts/schema/)\>

Defined in: table/build/plugin.d.ts:24

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`InferSchemaOptions`](/reference/frictionless-ts/inferschemaoptions/)

#### Returns

`Promise`\<`undefined` \| [`Schema`](/reference/frictionless-ts/schema/)\>

***

### loadPackage()?

> `optional` **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: dataset/build/plugin.d.ts:7

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

#### Inherited from

[`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/).[`loadPackage`](/reference/frictionless-ts/datasetplugin/#loadpackage)

***

### loadTable()?

> `optional` **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| [`Table`](/reference/frictionless-ts/table/)\>

Defined in: table/build/plugin.d.ts:25

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

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

[`Package`](/reference/frictionless-ts/package/)

##### options

[`SavePackageOptions`](/reference/frictionless-ts/savepackageoptions/) & `object`

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

#### Overrides

[`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/).[`savePackage`](/reference/frictionless-ts/datasetplugin/#savepackage)

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
