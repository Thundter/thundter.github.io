---
layout: "../../../../../layouts/Blog.astro"
title: "CreateReactApp"
date: "2026-07-02"
tags: ["development", "javascript", "react", "CreateReactApp" ]
---

- `npm init -y` creates `package.json`

- `npm install react react-dom` creates `package-lock.json`

- `npm install --save-dev typescript @types/react @types/react-dom` adds typescript

- `npx tsc --init` initialize typescript and creates tsconfig file

for es6 and manual setup
This approach will use Webpack for module bundling and Babel for transpiling ES6+ syntax.

- `npm install --save-dev webpack webpack-cli webpack-dev-server` for webpack

- `npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript` this package might not be needed with `react-jsx`

- `npm install --save-dev ts-loader`

- add the following to `tsconfig.json` 

suggested `"module": "esnext",` - replaced with `"module": "es2020",` as its more stable for production

suggested `"moduleResolution": "node",` - replaced with `"moduleResolution": "node10",` as node more backwards compatible, however we are creating latest from scratch so should use latest settings

check created `tsconfig.json` file against the settings below

``` json
{
  "compilerOptions": {
    "target": "es6",  // Set the target to ES6
    "module": "es2020",  // Set the module format to ES2020
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node10",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

__notes__

### `target`
Specifies the **ECMAScript version** your TypeScript code is compiled down to.  It determines which modern JavaScript features are preserved or transformed (e.g., arrow functions, async/await). 

- **Common values**: `"ES5"`, `"ES2015"`, `"ES2020"`, `"ESNext"`
- **Use `"ES2020"`** for Node.js v14+ or modern browsers. 
- **Use `"ESNext"`** to preserve latest JS features (ideal when using modern runtimes or bundlers). 
- Also influences the default `lib` types included.

---

### `module`
Defines the **module system** used in the compiled JavaScript output. 

- **Common values**: `"commonjs"`, `"esnext"`, `"ES2020"`, `"NodeNext"`, `"nodenext"`
- **`"commonjs"`**: Used for Node.js apps (supports `require()`). 
- **`"esnext"`**: For modern bundlers (Webpack, Vite) using ES Modules (`import/export`). 
- **`"NodeNext"` or `"nodenext"`**: For modern Node.js projects using ESM (requires `"type": "module"` in `package.json`). 

Prefer `"NodeNext"` for Node.js ESM, `"esnext"` for browser apps with bundlers.

---

### `moduleResolution`
Controls how TypeScript **resolves import paths** to actual files. 

- **`"node"`**: Classic Node.js resolution (CommonJS-style, looks for `node_modules`, `index.js`, etc.). 
- **`"nodenext"` or `"NodeNext"`**: Modern Node.js ESM-aware resolution (respects `.js` extensions, `.mts`, `package.json` `"exports"`). 
- **`"bundler"`**: Designed for modern bundlers (Vite, esbuild); supports subpath imports, conditions, and extensionless imports. 

- Use `"nodenext"` with `"module": "nodenext"` in Node.js ESM.
- Use `"bundler"` when using tools like Vite or Webpack.

---

### `lib`
Specifies **built-in API types** available in your project (e.g., `Promise`, `fetch`, `console`). 

- If not set, defaults based on `target` (e.g., `target: ES5` → includes `ES5`, `DOM`, `ScriptHost`, etc.).
- **Common additions**:
  - `"ES2020"`: Modern JS built-ins.
  - `"DOM"`: Browser globals (`window`, `document`).
  - `"DOM.Iterable"`: Iterators for DOM collections.
  - `"WebWorker"`: For worker scripts. 

- For Node.js: Use `["ES2020"]` (or higher) without `DOM`.
- For browsers: Include `["ES2020", "DOM", "DOM.Iterable"]`.




- Create a `webpack.config.js` file in the root of your project

```
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
};
```

- create `src/App.tsx` with the following code. This tests to see if code works

``` js
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
```

- create `src/index.html` 

``` js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React TypeScript App</title>
</head>
<body>
  <div id="root"></div>
  <script src="/bundle.js"></script>
</body>
</html>
```

- create `src/index.tsx`

``` js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('root');
if (rootElement) 
{
	const root = createRoot(rootElement);

	root.render(
	  <React.StrictMode>
		<App />
	  </React.StrictMode>
	);
}
```

