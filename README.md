# rollup-plugin-npm-run

Simple [Rollup](https://rollupjs.org/) plugin to run an npm run script after the bundle is written.

## Install

```bash
npm install rollup-plugin-npm-run
```

## Using

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

Pass in additional args, like `npm run start -- --env dev`: 

```js
npmRun('start', [ '--', '--env', 'dev' ])
```

## API `npmRun(npmRunScript: String, [options: Object])`

* `npmRunScript: String` - The npm script name, e.g. `start` would be the same as running `npm run start`.
* `options: Object` - Pass optional settings.
* `options.args: Array<String>` - Pass in an optional list of `args` to the `spawn` process.

## License

Published and released with ❤️ under the [Very Open License](http://veryopenlicense.com)
