# Just unique id generator

Simple unique id generator. Suitable for creating temporary links or identifiers for objects or documents. The basis for creating an identifier is a random set consisting of the English alphabet in upper and lower cases, as well as numbers from 0 to 9, by default an identifier is generated with a length of **24** characters.

### Functions:

> juid() - will return id string with a length of **24** characters.
> 
> juid(10) - will return id string with a length of **10** characters.
>
> juid(16, 24) - will return id string with a length of range from **16** to **24** characters.

```js
import { juid } from "just-unique-id";
const id = juid(); // => "XOIS46ZlI7U4pyMjvXJ4oa3Q"
const id = juid(10); // => "dYlktRzdQj"
const id = juid(16, 24); // => "rrPCxsQMvYYVzptZT3www"
```
