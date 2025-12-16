---
editUrl: false
next: false
prev: false
title: "savePackageToGithub"
---

> **savePackageToGithub**(`dataPackage`, `options`): `Promise`\<\{ `path`: `string`; `repoUrl`: `string`; \}\>

Defined in: [dataset/plugins/github/package/save.ts:17](https://github.com/datisthq/frictionless-ts/blob/00601b0a4e9f476621340273fef9eeb54295b4e4/dataset/plugins/github/package/save.ts#L17)

Save a package to a Github repository

## Parameters

### dataPackage

[`Package`](/reference/frictionless-ts/package/)

### options

Object containing the package to save and Github details

#### apiKey

`string`

#### org?

`string`

#### repo

`string`

## Returns

`Promise`\<\{ `path`: `string`; `repoUrl`: `string`; \}\>

Object with the repository URL
