---
editUrl: false
next: false
prev: false
title: "DatabasePlugin"
---

Defined in: database/build/plugin.d.ts:5

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

Defined in: database/build/plugin.d.ts:12

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

Defined in: database/build/plugin.d.ts:11

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`undefined` \| [`Package`](/reference/frictionless-ts/package/)\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`loadPackage`](/reference/frictionless-ts/tableplugin/#loadpackage)

***

### loadTable()

> **loadTable**(`resource`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: database/build/plugin.d.ts:13

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

Defined in: database/build/plugin.d.ts:6

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

Defined in: database/build/plugin.d.ts:14

#### Parameters

##### table

[`Table`](/reference/frictionless-ts/table/)

##### options

[`SaveTableOptions`](/reference/frictionless-ts/savetableoptions/)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Implementation of

[`TablePlugin`](/reference/frictionless-ts/tableplugin/).[`saveTable`](/reference/frictionless-ts/tableplugin/#savetable)
