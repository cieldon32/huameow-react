# How to test react locally
### 1- creat a react app by cra
```
 npx create-react-app my-react --template typescript
```

### 2- eject app
```
yan eject
```

### 3- alias
```
// config/webpack.config.js

alias: {
        'react': path.resolve(__dirname, '../src/react/packages/react'),
        'react-dom': path.resolve(__dirname, '../src/react/packages/react-dom'),
        'shared': path.resolve(__dirname, '../src/react/packages/shared'),
        'react-reconciler': path.resolve(__dirname, '../src/react/packages/react-reconciler'),
        "legacy-events": path.resolve(__dirname, "../src/react/packages/legacy-events"),
      },
```

### 4- babel config for flow
```
 yarn add @babel/plugin-transform-flow-strip-types --dev

// config/webpack.config.js
require.resolve('@babel/plugin-transform-flow-strip-types'),
```

### 5- ignore the eslint of react
```
// .eslintignore
src/react/packages/**/*.js
```

### 6- add .eslintrc.json
```dotnetcli
// .eslintrc.json
{
    "extends": "react-app",
    "globals": {
        "__DEV__": true,
        "__PROFILE__": true,
        "__UMD__": true,
        "__EXPERIMENTAL__": true
    }
  }
```

### 7- modify ENV
```dotnetcli
// config/env.js
const stringified = {
    "__DEV__": true,
    "__PROFILE__": true,
    "__UMD__": true,
    "__EXPERIMENTAL__": true,
.......
```

### 8- change the import of react
```dotnetcli
import * as React from 'react';
import * as ReactDOM from 'react-dom';
```

### 9- modify react-reconciler
```dotnetcli
// src/react/packages/react-reconciler/src/ReactFiberHostConfig.js 
// Annotate all and then add:
export * from './forks/ReactFiberHostConfig.dom';
```

### 10- modify shared
```dotnetcli
// src/react/packages/shared/ReactSharedInternals.js
// Annotate all and then add:
import ReactSharedInternals from '../react/src/ReactSharedInternals';

// src/react/packages/shared/invariant.js
// add:
  if (condition) {
    return;
  }
```