# Just unique id generator

Simple unique id generator. Suitable for creating temporary links or identifiers for objects or documents. The basis for creating an identifier is a random set consisting of the English alphabet in upper and lower cases, as well as numbers from 0 to 9, by default an identifier is generated with a length of **24** characters, if you wish, you can change this value by passing a number to the `juid([number of max length])` function that will change the generation length id

```js
import { juid } from "just-unique-id";
const id = juid(); // => "XOIS46ZlI7U4pyMjvXJ4oa3Q"
const id = juid(10); // => "dYlktRzdQj"
```
