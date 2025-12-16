---
editUrl: false
next: false
prev: false
title: "TablePlugin"
---

Defined in: [table/plugin.ts:27](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L27)

## Extends

- [`DatasetPlugin`](/reference/frictionless-ts/datasetplugin/)

## Methods

### inferDialect()?

> `optional` **inferDialect**(`resource`, `options?`): `Promise`\<`undefined` \| [`Dialect`](/reference/frictionless-ts/dialect/)\>

Defined in: [table/plugin.ts:33](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L33)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`InferDialectOptions`](/reference/_frictionless-ts/table/inferdialectoptions/)

#### Returns

`Promise`\<`undefined` \| [`Dialect`](/reference/frictionless-ts/dialect/)\>

***

### inferSchema()?

> `optional` **inferSchema**(`resource`, `options?`): `Promise`\<`undefined` \| [`Schema`](/reference/frictionless-ts/schema/)\>

Defined in: [table/plugin.ts:38](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L38)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`InferSchemaOptions`](/reference/_frictionless-ts/table/inferschemaoptions/)

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

> `optional` **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| [`Table`](/reference/_frictionless-ts/table/table/)\>

Defined in: [table/plugin.ts:43](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L43)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| [`Table`](/reference/_frictionless-ts/table/table/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: [table/plugin.ts:28](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L28)

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

Defined in: [table/plugin.ts:48](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/table/plugin.ts#L48)

#### Parameters

##### table

[`Table`](/reference/_frictionless-ts/table/table/)

##### options

[`SaveTableOptions`](/reference/_frictionless-ts/table/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>
