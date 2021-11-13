# Just random method

Sometimes during development, there is a need for a random value generator method, JavaScript has a Math.random() method, but we need a method that will return a range of values, and this method can be implemented, but it's even easier to borrow :)

### Functions:

> _**jrand(16, 24)**_ - will return integer number in range from **16** to **24**.

```js
import { jrand } from "just-random";
const random = jrand(10, 50); // => 17
```
