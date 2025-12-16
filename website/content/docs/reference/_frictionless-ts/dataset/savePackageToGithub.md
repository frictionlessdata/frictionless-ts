---
editUrl: false
next: false
prev: false
title: "savePackageToGithub"
---

> **savePackageToGithub**(`dataPackage`, `options`): `Promise`\<\{ `path`: `string`; `repoUrl`: `string`; \}\>

Defined in: [dataset/plugins/github/package/save.ts:17](https://github.com/datisthq/frictionless-ts/blob/e0090ba3a6654c978542763fc4036b3a8316ee2a/dataset/plugins/github/package/save.ts#L17)

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
