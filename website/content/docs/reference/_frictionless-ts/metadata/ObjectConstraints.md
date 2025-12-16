---
editUrl: false
next: false
prev: false
title: "ObjectConstraints"
---

Defined in: [field/types/Object.ts:16](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Object.ts#L16)

Object-specific constraints

## Extends

- `BaseConstraints`

## Properties

### enum?

> `optional` **enum**: `string`[] \| `Record`\<`string`, `any`\>[]

Defined in: [field/types/Object.ts:36](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Object.ts#L36)

Restrict values to a specified set of objects
Serialized as JSON strings or object literals

***

### jsonSchema?

> `optional` **jsonSchema**: `Record`\<`string`, `any`\>

Defined in: [field/types/Object.ts:30](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Object.ts#L30)

JSON Schema object for validating the object structure and properties

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [field/types/Object.ts:25](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Object.ts#L25)

Maximum number of properties

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [field/types/Object.ts:20](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Object.ts#L20)

Minimum number of properties

***

### required?

> `optional` **required**: `boolean`

Defined in: [field/types/Base.ts:62](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L62)

Indicates if field is allowed to be null/empty

#### Inherited from

`BaseConstraints.required`

***

### unique?

> `optional` **unique**: `boolean`

Defined in: [field/types/Base.ts:67](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/metadata/field/types/Base.ts#L67)

Indicates if values must be unique within the column

#### Inherited from

`BaseConstraints.unique`
