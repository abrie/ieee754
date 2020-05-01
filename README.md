# IEEE754 ULP Comparision Helpers

A collection of helper functions for comparing `Number` types by [ULP](https://en.wikipedia.org/wiki/Unit_in_the_last_place) distance.

- `ulpDistance(a:number,b:number):bigint`
- `ulpAlmostEqual(a:number, b:number, maxDistance:number):boolean`
- `ulpEqual(a:number, b:number):boolean`

## Install

`yarn add eirba@ieee754`
or
`npm install eirba@ieee754`

## Import

`import {ulpAlmostEqual} from 'eirbe@ieee754'`

## Use

`ulpAlmostEqual(0.1+0.2, 0.3, 1n)` -> `true`
