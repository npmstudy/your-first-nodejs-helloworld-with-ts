# Your first Node.js Helloworld with TypeScript

![build status](https://github.com/npmstudy/node-v20-helloworld/actions/workflows/main.yml/badge.svg) [![codecov](https://codecov.io/github/npmstudy/node-v20-helloworld/graph/badge.svg?token=CSMN20E3W4)](https://codecov.io/github/npmstudy/node-v20-helloworld)

- use Node.js v20 test runner
- use c8 for coverage


## What is in this repository?

- use [tsx](https://github.com/esbuild-kit/tsx) as typescript register & executor
- use [tsup](https://github.com/egoist/tsup) as transpiler from ts to esm
- use [tsd](https://github.com/SamVerschueren/tsd) as type test runner


## Usages

install dependency

```
$ npm i
```

run test suite

```
$ npm test
```

transpile ts to esm for release

```
$ npm build
```

## Support 2 ways to debug in vscode

1、run with node --inspect

```
$ npm run debug
```

in .vscode/launch.json

```
  {
      "name": "Attach to tsx",
      "port": 9229,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
```

2、run directly in .vscode/launch.json

```
    {
      "name": "debug with tsx loader",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--loader",
        "tsx"
      ],
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/src/main.ts",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
```






## Requirements

- Node.js v20
- TypeScript 5+


## License

MIT @ npmstudy