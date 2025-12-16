---
editUrl: false
next: false
prev: false
title: "DatabasePlugin"
---

Defined in: [database/plugin.ts:12](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L12)

## Implements

- [`TablePlugin`](/reference/frictionless-ts/tableplugin/)

## Constructors

### Constructor

> **new DatabasePlugin**(): `DatabasePlugin`

#### Returns

`DatabasePlugin`

## Methods

### inferSchema()

> **inferSchema**(`resource`): `Promise`\<`undefined` \| [`Schema`](/reference/frictionless-ts/schema/)\>

Defined in: [database/plugin.ts:35](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L35)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

#### Returns

`Promise`\<`undefined` \| [`Schema`](/reference/frictionless-ts/schema/)\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`inferSchema`](/reference/frictionless-ts/tableplugin/#inferschema)

***

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

Defined in: [database/plugin.ts:26](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L26)

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

***

### loadTable()

> **loadTable**(`resource`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: [database/plugin.ts:42](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L42)

#### Parameters

##### resource

`Partial`\<[`Resource`](/reference/frictionless-ts/resource/)\>

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`loadTable`](/reference/frictionless-ts/tableplugin/#loadtable)

***

### savePackage()

> **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path`: `string`; \}\>

Defined in: [database/plugin.ts:13](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L13)

#### Parameters

##### dataPackage

[`Package`](/reference/frictionless-ts/package/)

##### options

[`SavePackageOptions`](/reference/frictionless-ts/savepackageoptions/) & `object`

#### Returns

`Promise`\<`undefined` \| \{ `path`: `string`; \}\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`savePackage`](/reference/frictionless-ts/tableplugin/#savepackage)

***

### saveTable()

> **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: [database/plugin.ts:49](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/database/plugin.ts#L49)

#### Parameters

##### table

[`Table`](/reference/frictionless-ts/table/)

##### options

[`SaveTableOptions`](/reference/frictionless-ts/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`saveTable`](/reference/frictionless-ts/tableplugin/#savetable)
