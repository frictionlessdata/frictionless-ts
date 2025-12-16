---
editUrl: false
next: false
prev: false
title: "savePackageToZenodo"
---

> **savePackageToZenodo**(`dataPackage`, `options`): `Promise`\<\{ `datasetUrl`: `string`; `path`: `string`; \}\>

Defined in: [dataset/plugins/zenodo/package/save.ts:17](https://github.com/datisthq/frictionless-ts/blob/276d18737d0d8f84b375d13c9be2d3205ceda86a/dataset/plugins/zenodo/package/save.ts#L17)

Save a package to Zenodo

## Parameters

### dataPackage

[`Package`](/reference/frictionless-ts/package/)

### options

Object containing the package to save and Zenodo API details

#### apiKey

`string`

#### sandbox?

`boolean`

## Returns

`Promise`\<\{ `datasetUrl`: `string`; `path`: `string`; \}\>

Object with the deposit URL and DOI
