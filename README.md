# vite-vs-datatables

## Steps to reproduce

 - `npm create vite@latest sample -- --template react-ts`
 - `npm install datatables.net-searchpanes`
 - `npm install datatables.net-searchpanes-bs5`


Add imports in `main.tsx`

```ts
import 'datatables.net-searchpanes'
import 'datatables.net-searchpanes-bs5'
```

You get a javascript error on console screen of the browser and blank screen.

```javascript
Uncaught TypeError: Cannot read properties of undefined (reading 'classes')
```

When commenting `datatables.net-searchpanes-bs5` it works again

```ts
import 'datatables.net-searchpanes'
//import 'datatables.net-searchpanes-bs5'
```
