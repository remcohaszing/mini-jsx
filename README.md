# Mini JSX

Create DOM elements using JSX

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Attributes](#attributes)
  - [Ref](#ref)
  - [Children](#children)
- [Configuration](#configuration)
  - [TypeScript Configuration](#typescript-configuration)
  - [Babel Configuration](#babel-configuration)
  - [Using JSX Comments](#using-jsx-comments)
- [License](#license)

## Installation

```sh
npm install mini-jsx
```

## Usage

`mini-jsx` can be used to create native DOM nodes using JSX.

```jsx
const button = (
  <button
    className="is-primary"
    onclick={() => {
      console.log('Click!')
    }}
    ref={(node) => {
      // Logs the button
      console.log(node)
    }}
    type="button"
  >
    <i className="button" />
    <span>Button text</span>
  </button>
)
```

### Attributes

All properties are assigned to the element as-is if the attribute exists on the element type.
Otherwise it is assigned as an attribute. This way attributes such as `role` and attributes are
supported, but also unknown attributes, such as `ng-app`. This also means for example `onclick`
should be used, not `click` or `onClick`.

### Ref

Also a `ref` prop can be defined as a function. This will be called with the created component after
its props and children have been set.

### Children

Children of type `null`, `undefined`, or `boolean` will be ignored. Arrays will be handled
recursively. Other elements will be appended to the DOM node as-is. This means HTML element children
will be rendered as expected, but other values will be converted to strings.

## Configuration

### TypeScript Configuration

This library is fully typed. In fact, it is written in TypeScript.

Add the following properties to `compilerOptions` in `tsconfig.json`.

```jsonc
{
  "compilerOptions": {
    // This should always be "react-jsx".
    "jsx": "react-jsx",
    "jsxImportSource": "mini-jsx",

    "lib": [
      "dom",
      // es2017 or higher is required
      "esnext"
    ]

    // More compiler options…
  }
}
```

### Babel Configuration

Add the following to your babel config.

```js
module.exports = {
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic', importSource: 'mini-jsx' }]

    // More plugins…
  ]
}
```

### Using JSX Comments

If you don’t want to configure Babel or TypeScript using the above methods project wide, a JSX
pragma can be used to transform a single file using `mini-jsx`. This way it can be combined with for
example React in the same project.

```js
/** @jsxImportSource mini-jsx */
```

## License

[MIT](./LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
