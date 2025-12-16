---
title: Working with Arrow
sidebar:
  label: Arrow
  order: 3
---

The `@frictionless-ts/table` package provides efficient support for loading and saving data in Apache Arrow format. It uses Polars DataFrames for high-performance columnar data processing.

## Installation

```bash
npm install @frictionless-ts/table
```

## Basic Usage

> [!TIP]
> You can use `loadTable` and `saveTable` from `frictionless-ts` instead of `@frictionless-ts/table` to load and save ARROW files if the framework can infer that files are in the `arrow/feather` format.

### Loading Data

```typescript
import { loadArrowTable } from "@frictionless-ts/table"

// Load from local file
const table = await loadArrowTable({ path: "data.arrow" })

// Load multiple files (concatenated)
const table = await loadArrowTable({
  path: ["file1.arrow", "file2.arrow"]
})
```

### Saving Data

```typescript
import { saveArrowTable } from "@frictionless-ts/table"

// Save as Arrow format
await saveArrowTable(table, { path: "output.arrow" })
```
