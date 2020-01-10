# Dev validation only

## Install package
```npm i -D typescript```

## Config TS

Create a `tsconfig.json` file in the root.

```js
{
    "compilerOptions": {
        // Lets you mix js with ts
        "allowJs": true,
        // Target to the lastest JS code (faster)
        "target": "esnext",
        // Pevent outputing anything
        "noEmit": true,
        // Enable all strict type checking options.
        "strict": true,
        // How to resolve modules
        "moduleResolution": "node",
        // Allow TS to set unkown types as "any"
        "noImplicitAny": false,
        // remove comments after transpile
        "removeComments": true,
        // Add sourceMap
        "sourceMap": true,
        // JSX compiler
        "jsx": "react",
        // Component factory function -> h for preact
        "jsxFactory": "React.createElement",
        // Allow default imports from modules with no default export
        "allowSyntheticDefaultImports": true
    },
    "include": ["./src/**/*.tsx", "./src/**/*.ts"]
}
```
All available options:
https://www.typescriptlang.org/docs/handbook/compiler-options.html

## Create script

> package.json

Add type check script
```json
"scripts": {
	"check-types": "tsc"
}
```

`npm run check-types`

# Jest

Add .ts files to your jest config

```json
{
    "moduleFileExtensions": ["js", "jsx", "ts", "tsx"],
}
```

# Setting up production mode

## Install babel plugins
`npm install -D @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread`

## Configure .babelrc
```json
{
	"presets": [
			"@babel/typescript"
	],
	"plugins": [
			"@babel/proposal-class-properties",
			"@babel/proposal-object-rest-spread"
	]
}
```

## Webpack
> webpack.config.js

Add TS files configuration to babel

```js
    {
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'], // Add .ts and .jsx
        },
        module: {
            rules: [
                {
                    test: /\.js|.ts|.jsx?$/, // Add .ts and .jsx
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: { compact: false },
                },
            ],
        },
    }
```

Done!


