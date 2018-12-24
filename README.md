# gatsby-plugin-alias-imports

This Gatsby plugin is a wrapper around the webpack feature for aliasing in your import statements.

So you can do

```javascript
import '@components/navbar'
```

Instead of

```javascript
import '../../components/navbar.js'
```

This works by simply injecting the options into Webpack using `onCreateWebpackConfig`.

## Install

`npm i --save gatsby-plugin-alias-imports`

`yarn add gatsby-plugin-alias-imports`

## How to use

Add the plugin to your Gatsby config.

```javascript
{
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {},
        extensions: []
      }
    }
  ]
}
```

## Options

### alias

Alias should be an object that takes multiple key/value pairs.

The **key** should be the **alias** and the **value** is the **path**.

The path that you specify can be relative to the root directory or absolute.

To use an **absolute directory**, you can do something like

```javascript
const path = require('path')

// [ ... ]

alias: {
  "@components": path.resolve(__dirname, 'src/components')
}
```

### extensions

The **extensions** allows you to omit extensions when importing files.

It is an array of desired extensions to auto-find.

E.g. `js`, `css`, `sass`, `md`

## Example

### gatsby-config.js

```javascript
{
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@sass": "src/sass",
          "@templates": "src/templates",
          "@posts": "content/posts",
        },
        extensions: [
          "js",
        ],
      }
    }
  ]
}
```

### index.js

```javascript
import Layout from '@layouts/main'
import { ComponentA, ComponentB } from '@components/myfile'
```

## Further reading

Check out the [resolve section][1] of the Webpack config documentation for more information.

[1]: https://webpack.js.org/configuration/resolve/#resolve-alias