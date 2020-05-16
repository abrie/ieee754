# IEEE754 ULP Comparision Utilities

A collection of functions to compare `Number` types by [ULP](https://en.wikipedia.org/wiki/Unit_in_the_last_place) distance.

- `ulpDistance(a:number,b:number):bigint`
- `ulpAlmostEqual(a:number, b:number, maxDistance:number):boolean`
- `ulpEqual(a:number, b:number):boolean`

  Note the use of `BigInt` to represent the ULP value of a `Number`. This is necessary because the library internally converts the float64 to a biased int64. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) for the syntax and limitations of BigInt numbers.

  If you plan to use this library in unit tests, check out the [Jest companion library](https://github.com/abrie/jest-ieee754).

## Install

`yarn add eirba@ieee754`

or

`npm install eirba@ieee754`

## Import

## Example

```
import {ulpAlmostEqual} from 'eirbe@ieee754'

const isTrue = ulpAlmostEqual(0.1+0.2, 0.3, 1n)
```
