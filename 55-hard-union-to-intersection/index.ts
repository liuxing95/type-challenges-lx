/*
  55 - Union to Intersection
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `UnionToIntersection<U>`
  
  For example
  
  ```ts
  type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
  ```
  
  > View on GitHub: https://tsch.js.org/55
*/


/* _____________ Your Code Here _____________ */

// 解题思路 联合类型是符合分配律的 然后使用 逆变因为函数的参数在逆变位置上
// 而根据ts规范，在逆变位置上，同一个类型的多个候选会被推断成交叉类型
type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never;
type UnionToIntersection<U> = ToUnionOfFunction<U> extends (a: infer U) => any ? U : never

type X = ToUnionOfFunction<'foo' | 42 | true>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/55/answer
  > View solutions: https://tsch.js.org/55/solutions
  > More Challenges: https://tsch.js.org
*/

