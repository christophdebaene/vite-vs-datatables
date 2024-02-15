# vite-vs-datatables

## Installation

```bash
npm create vite@latest sample-vanilla-ts -- --template vanilla-ts

npm install --save jquery
npm install --save bootstrap
npm install --save datatables.net
npm install --save datatables.net-bs5
npm install --save datatables.net-select
npm install --save datatables.net-select-bs5
npm install --save datatables.net-searchpanes
npm install --save datatables.net-searchpanes-bs5
```

## Example

SearchPanes example from [here](https://datatables.net/extensions/searchpanes/examples/styling/bootstrap5.html)

Added to `main.ts` with the necessary imports


```ts
import $ from 'jquery';
import 'bootstrap';

import 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-searchpanes';

// Commenting out following imports will result in an error

//import 'datatables.net-bs5';
//import 'datatables.net-select-bs5';
//import 'datatables.net-searchpanes-bs5';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-select-bs5/css/select.bootstrap5.min.css';
import 'datatables.net-searchpanes-bs5/css/searchPanes.bootstrap5.min.css';
```

You get a javascript error on console screen of the browser and blank screen.

```javascript
Uncaught TypeError: Cannot read properties of undefined (reading 'classes')
```
