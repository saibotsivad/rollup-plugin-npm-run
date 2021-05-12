# rollup-plugin-npm-run

Simple [Rollup](https://rollupjs.org/) plugin to run an npm run script after the bundle is written.

## install

```bash
npm install rollup-plugin-npm-run
```

## use

Inside your Rollup config:

```js
import npmRun from 'rollup-plugin-npm-run'

const watch = process.env.ROLLUP_WATCH

export default {
    plugins: [
        watch && npmRun('start')
    ]
    // ... plus the rest
}
```

This will run `npm run start` after every `writeBundle` event in Rollup.

## api

This is a really simple plugin, it takes one parameter: the npm run script name.

## license

The contributor(s) to this creative work voluntarily grant permission
to any individual(s) or entities of any kind
- to use the creative work in any manner,
- to modify the creative work without restriction,
- to sell the creative work or derivatives thereof for profit, and
- to release modifications of the creative work in part or whole under any license
with no requirement for compensation or recognition of any kind.
