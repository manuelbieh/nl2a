# nl2a

This tiny module let's you create an array from a multiline ES2015 template-string.

## Installation

`npm install nl2a`

## Functions

This module comes in 2 flavors: `nl2a` (_NewLine2Array_) and `nl2at` (_NewLine2ArrayTrimmed_). While the former ignores white spaces at the beginning and end of each line, the latter removes them using a simple .trim()
Empty lines will be ignored in both functions.

## Examples

```
const { nl2a, nl2at } from 'nl2a';

const example1 = nl2a`
this
is
an
example`;

const example2 = nl2a`
    this
    is
    an
    example
`;

const example3 = nl2at`
    this
    is
    an
    example
`;

console.log(example1); // ["this","is","an","example"]
console.log(example2); // ["    this","    is","    an","    example"]
console.log(example3); // ["this","is","an","example"]
```

Expressions also work fine:
```
const example4 = nl2at`
5+5 is ${5+5}
3+4 is ${3+4}
`;

console.log(example4); // ["5+5 is 10", "3+4 is 7"]
```
