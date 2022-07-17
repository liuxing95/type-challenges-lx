/*
  2059 - Drop String
  -------
  by CaptainOfPhB (@CaptainOfPhB) #hard #template-literal #infer
  
  ### Question
  
  Drop the specified chars from a string.
  
  For example:
  
  ```ts
  type Butterfly = DropString<'foobar!', 'fb'> // 'ooar!'
  ```
  
  > View on GitHub: https://tsch.js.org/2059
*/


/* _____________ Your Code Here _____________ */

type ExcludeString<S extends string, F extends String> = F extends `${infer First}${infer Rest}`
? First extends S
  ? S extends First
    ? true
    : ExcludeString<S, Rest>
  : ExcludeString<S, Rest>
: false

type DropString<S extends string, F extends string, R extends string = ''> = S extends `${infer First}${infer Rest}`
? ExcludeString<First, F> extends true
  ? DropString<Rest, F, R>
  : DropString<Rest, F, `${R}${First}`>
: R


type Y = ExcludeString<'b', 'but'>
type X = DropString<'butter fly!', 'but'>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2059/answer
  > View solutions: https://tsch.js.org/2059/solutions
  > More Challenges: https://tsch.js.org
*/

