---
editUrl: false
next: false
prev: false
title: "TablePlugin"
---

Defined in: [table/plugin.ts:27](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L27)

## Extends

- [`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/)

## Methods

### inferDialect()?

> `optional` **inferDialect**(`resource`, `options?`): `Promise`\<`undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/)\>

Defined in: [table/plugin.ts:33](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L33)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/_frictionless-ts/metadata/resource/)\>

##### options?

[`InferDialectOptions`](/reference/_frictionless-ts/table/inferdialectoptions/)

#### Returns

`Promise`\<`undefined` \| [`Dialect`](/reference/_frictionless-ts/metadata/dialect/)\>

***

### inferSchema()?

> `optional` **inferSchema**(`resource`, `options?`): `Promise`\<`undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/)\>

Defined in: [table/plugin.ts:38](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L38)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/_frictionless-ts/metadata/resource/)\>

##### options?

[`InferSchemaOptions`](/reference/_frictionless-ts/table/inferschemaoptions/)

#### Returns

`Promise`\<`undefined` \| [`Schema`](/reference/_frictionless-ts/metadata/schema/)\>

***

### loadPackage()?

> `optional` **loadPackage**(`source`): `Promise`\<`any`\>

Defined in: dataset/build/plugin.d.ts:7

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`loadPackage`](/reference/_frictionless-ts/dataset/datasetplugin/#loadpackage)

***

### loadTable()?

> `optional` **loadTable**(`resource`, `options?`): `Promise`\<`undefined` \| [`Table`](/reference/_frictionless-ts/table/table/)\>

Defined in: [table/plugin.ts:43](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L43)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/_frictionless-ts/metadata/resource/)\>

##### options?

[`LoadTableOptions`](/reference/_frictionless-ts/table/loadtableoptions/)

#### Returns

`Promise`\<`undefined` \| [`Table`](/reference/_frictionless-ts/table/table/)\>

***

### savePackage()?

> `optional` **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

Defined in: [table/plugin.ts:28](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L28)

#### Parameters

##### dataPackage

[`Package`](/reference/_frictionless-ts/metadata/package/)

##### options

[`SavePackageOptions`](/reference/_frictionless-ts/dataset/savepackageoptions/) & `object`

#### Returns

`Promise`\<`undefined` \| \{ `path?`: `string`; \}\>

#### Overrides

[`DatasetPlugin`](/reference/_frictionless-ts/dataset/datasetplugin/).[`savePackage`](/reference/_frictionless-ts/dataset/datasetplugin/#savepackage)

***

### saveTable()?

> `optional` **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: [table/plugin.ts:48](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/table/plugin.ts#L48)

#### Parameters

##### table

[`Table`](/reference/_frictionless-ts/table/table/)

##### options

[`SaveTableOptions`](/reference/_frictionless-ts/table/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>
