/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### Question
  
  Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`
  
  For example
  
  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```
  
  > View on GitHub: https://tsch.js.org/2688
*/
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'


/* _____________ Your Code Here _____________ */

type StartsWith<T extends string, U extends string> = T extends `${U}${infer Rest}` ? true : false

type X = StartsWith<'abc', 'ac'>
type X1 = StartsWith<'abc', 'ab'>


type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2688/answer
  > View solutions: https://tsch.js.org/2688/solutions
  > More Challenges: https://tsch.js.org
*/

