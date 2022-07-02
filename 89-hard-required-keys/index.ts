/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.
  
  For example
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
  
  > View on GitHub: https://tsch.js.org/89
*/


/* _____________ Your Code Here _____________ */

type GetRequired<T extends Record<string, unknown>> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K ]: T[K]
}

type RequiredKeys<T extends Record<string, unknown>> = keyof GetRequired<T> 

type X = RequiredKeys<{ a: number; b?: string }>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/89/answer
  > View solutions: https://tsch.js.org/89/solutions
  > More Challenges: https://tsch.js.org
*/

