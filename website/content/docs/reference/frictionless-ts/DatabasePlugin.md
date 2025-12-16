---
editUrl: false
next: false
prev: false
title: "DatabasePlugin"
---

Defined in: database/build/plugin.d.ts:5

## Implements

- `unknown`

## Constructors

### Constructor

> **new DatabasePlugin**(): `DatabasePlugin`

#### Returns

`DatabasePlugin`

## Methods

### inferSchema()

> **inferSchema**(`resource`): `Promise`\<`any`\>

Defined in: database/build/plugin.d.ts:12

#### Parameters

##### resource

`Resource`

#### Returns

`Promise`\<`any`\>

***

### loadPackage()

> **loadPackage**(`source`): `Promise`\<`any`\>

Defined in: database/build/plugin.d.ts:11

#### Parameters

##### source

`string`

#### Returns

`Promise`\<`any`\>

***

### loadTable()

> **loadTable**(`resource`): `Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

Defined in: database/build/plugin.d.ts:13

#### Parameters

##### resource

`Resource`

#### Returns

`Promise`\<`undefined` \| `LazyDataFrame`\<`any`\>\>

***

### savePackage()

> **savePackage**(`dataPackage`, `options`): `Promise`\<`undefined` \| \{ `path`: `string`; \}\>

Defined in: database/build/plugin.d.ts:6

#### Parameters

##### dataPackage

`Package`

##### options

`any`

#### Returns

`Promise`\<`undefined` \| \{ `path`: `string`; \}\>

***

### saveTable()

> **saveTable**(`table`, `options`): `Promise`\<`undefined` \| `string`\>

Defined in: database/build/plugin.d.ts:14

#### Parameters

##### table

`Table`

##### options

`SaveTableOptions`

#### Returns

`Promise`\<`undefined` \| `string`\>
