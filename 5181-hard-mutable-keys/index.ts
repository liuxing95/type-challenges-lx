/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #hard #utils
  
  ### Question
  
  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.
  
  For example:
  
  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```
  
  > View on GitHub: https://tsch.js.org/5181
*/


/* _____________ Your Code Here _____________ */

type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

type MutableKeys<T extends Record<string, unknown>> = keyof {
  [K in keyof T as IsEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? never : K ]: T[K]
}

type X1 = IsEqual<{ readonly a: number }, { a: number }>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = MutableKeys<{ a: undefined; readonly b: undefined }>

type cases = [
  Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5181/answer
  > View solutions: https://tsch.js.org/5181/solutions
  > More Challenges: https://tsch.js.org
*/

