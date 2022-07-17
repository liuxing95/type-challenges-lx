/*
  8804 - Two Sum
  -------
  by PsiloLau (@Psilocine) #hard #array #math
  
  ### Question
  
  Given an array of integers `nums` and an integer `target`, return true if two numbers such that they add up to `target`.
  
  > View on GitHub: https://tsch.js.org/8804
*/


/* _____________ Your Code Here _____________ */

type StringToArray<T extends number, R extends unknown[] = []> = R['length'] extends T
? R
: StringToArray<T, [...R, unknown]>

type Sub<A extends number, B extends number> = StringToArray<B> extends [...StringToArray<A>, ...infer Rest]
? Rest['length']
: never

type Include<A extends number, B extends number[]> = B extends [infer First, ...infer Rest extends number[]]
? First extends A
  ? true
  : Include<A, Rest>
: false

type TwoSum<T extends number[], U extends number> = T extends [infer First extends number, ...infer Rest extends number[]]
? Include<Sub<First, U>, Rest> extends true
  ? true
  : TwoSum<Rest, U>
: false

// type X = TwoSum<[3, 3], 6>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8804/answer
  > View solutions: https://tsch.js.org/8804/solutions
  > More Challenges: https://tsch.js.org
*/

