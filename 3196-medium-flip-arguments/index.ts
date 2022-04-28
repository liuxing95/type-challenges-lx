/*
  3196 - Flip Arguments
  -------
  by jiangshan (@jiangshanmeta) #medium #arguments
  
  ### Question
  
  Implement the type version of lodash's ```_.flip```.
  
  Type ```FlipArguments<T>``` requires function type ```T``` and returns a new function type which has the same return type of T but reversed parameters.
  
  For example:
  
  ```typescript
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
  // (arg0: boolean, arg1: number, arg2: string) => void
  ```
  
  > View on GitHub: https://tsch.js.org/3196
*/


/* _____________ Your Code Here _____________ */


type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [infer First, ...infer Rest] ? Reverse<Rest, [First, ...R]> : R
type FlipArguments<T> = T extends (...args: infer Params) => infer Rest ? (...args: Reverse<Params>) => Rest : void


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type X = FlipArguments<() => boolean>
type Y = FlipArguments<(foo: string) => number>
type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3196/answer
  > View solutions: https://tsch.js.org/3196/solutions
  > More Challenges: https://tsch.js.org
*/

