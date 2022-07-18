/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard 
  
  ### Question
  
  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
  
  **Leap year is not considered**
  
  Good Luck!
  
  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/9155
*/


/* _____________ Your Code Here _____________ */

type _0_8 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type _0_9 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type _1_9 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type D28 = `0${_1_9}` | `1${_0_9}` | `2${_0_8}`
type D30 = `0${_1_9}` | `1${_0_9}` | `2${_0_9}` | `30`
type D31 = `0${_1_9}` | `1${_0_9}` | `2${_0_9}` | `30` | `31`
type M31 = `${`01` | `03` | `05` | `07` | `08` | `10` | `12`}${D31}`
type M30 = `${`04` | `06` | `09` | `11`}${D30}`
type M28 = `02${D28}`

type ValidDate<T extends string> = T extends M28 | M30 | M31 ? true : false


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/

