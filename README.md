# Just unique id generator

Simple unique id generator. Suitable for creating temporary links or identifiers for objects or documents. The basis for creating an identifier is a random set consisting of the English alphabet in upper and lower cases, as well as numbers from 0 to 9, by default an identifier is generated with a length of **24** characters.

### Functions:

> juid() - will return id string with a length of **24** characters.
> 
> juid(10) - will return id string with a length of **10** characters.
>
> juid(16, 24) - will return id string with a length of range from **16** to **24** characters.
>
> juidFromSymbols() or juidFromSymbols("") - will throw error: "The field 'symbols' cannot be empty or undefined".
>
> juidFromSymbols("justedlev") - will return id string with a length of **24** characters from the string "justedlev".
>
> juidFromSymbols("justedlev", 10) - will return id string with a length of **10** characters from the string "justedlev".
>
> juidFromSymbols("justedlev", 10, 5) - will return id string with a length range from **5** to **10** characters from the string "justedlev".

```js
import { juid } from "just-unique-id";
const id = juid(); // => "v7H3FqrVvX0wC4PL6J0O02VI"
const id = juid(10); // => "bw1VmTVQf1"
const id = juid(16, 24); // => "PIvAFt4A586706Ap"
const id = juidFromSymbols(); // => throw Error: "The field 'symbols' cannot be empty or undefined"
const id = juidFromSymbols(""); // => throw Error: "The field 'symbols' cannot be empty or undefined"
const id = juidFromSymbols("justedlev"); // => "vjelstdvltltvuujvstdljjs"
const id = juidFromSymbols("justedlev", 10); // => "teseseeejd"
const id = juidFromSymbols("justedlev", 10, 5); // => "jsldjt"
```
