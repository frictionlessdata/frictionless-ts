---
editUrl: false
next: false
prev: false
title: "loadDescriptor"
---

> **loadDescriptor**(`path`, `options?`): `Promise`\<`Record`\<`string`, `any`\>\>

Defined in: [descriptor/load.ts:10](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/metadata/descriptor/load.ts#L10)

Load a descriptor (JSON Object) from a file or URL
Uses dynamic imports to work in both Node.js and browser environments
Supports HTTP, HTTPS, FTP, and FTPS protocols

## Parameters

### path

`string`

### options?

#### onlyRemote?

`boolean`

## Returns

`Promise`\<`Record`\<`string`, `any`\>\>
