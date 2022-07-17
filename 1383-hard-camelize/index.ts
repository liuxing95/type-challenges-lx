/*
  1383 - Camelize
  -------
  by Denis (@denchiklut) #hard #union #recursion
  
  ### Question
  
  Implement Camelize which converts object from snake_case to to camelCase
  
  ```ts
  Camelize<{
    some_prop: string, 
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>
  
  // expected to be
  // {
  //   someProp: string, 
  //   prop: { anotherProp: string },
  //   array: [{ snakeCase: string }]
  // }
  ```
  
  > View on GitHub: https://tsch.js.org/1383
*/


/* _____________ Your Code Here _____________ */

type CamelizeString<T extends String> = T extends `${infer First}_${infer Rest}`
? CamelizeString<`${First}${Capitalize<Rest>}`>
: T

type CamelizeArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest]
? First extends Object
  ? [Camelize<First>, ...CamelizeArr<Rest>]
  : [First, ...CamelizeArr<Rest>]
: []

type Camelize<T extends Object> = {
  [K in keyof T as CamelizeString<K & string>]: T[K] extends Array<unknown>
  ? CamelizeArr<T[K]>
  : T[K] extends Object
    ? Camelize<T[K]>
    : T[K]
} 


type S1 = CamelizeString<'some_prop_aaa'>

type X1 = Camelize<{
  some_prop: string
  prop: { another_prop: string }
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string },
  ]
}>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<
    Camelize<{
      some_prop: string
      prop: { another_prop: string }
      array: [
        { snake_case: string },
        { another_element: { yet_another_prop: string } },
        { yet_another_element: string },
      ]
    }>,
    {
      someProp: string
      prop: { anotherProp: string }
      array: [
        { snakeCase: string },
        { anotherElement: { yetAnotherProp: string } },
        { yetAnotherElement: string },
      ]
    }
  >>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1383/answer
  > View solutions: https://tsch.js.org/1383/solutions
  > More Challenges: https://tsch.js.org
*/

