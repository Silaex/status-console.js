# status-console.js

A colorful status (success, error ...) console

## Parameters

*message*: string
*file*: string
*line*: string 

## Examples

```js
0: // index.js
1: const statusConsole = require('status-console');
2: 
3: statusConsole.error('Hey!', 'index.js', '3') // => ERROR index.js:3 >> Hey!
4: statusConsole.success('Hi!', 'index.js', '3') // => SUCCESS index.js:4 >> Hi!
5: statusConsole.warn('Hi!') // => WARN >> Hi!
6: statusConsole.success('Hi!', 'index.js') // => SUCCESS index.js:4 >> Hi!
```

## Author
**silaex**

## License 
***MIT***

