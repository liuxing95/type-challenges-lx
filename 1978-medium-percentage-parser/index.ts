/*
  1978 - Percentage Parser
  -------
  by SSShuai1999 (@SSShuai1999) #medium 
  
  ### Question
  
  Implement PercentageParser<T extends string>.
  According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.
  
  The structure should be: [`plus or minus`, `number`, `unit`]
  If it is not captured, the default is an empty string.
  
  For example:
  ```ts
  type PString1 = ''
  type PString2 = '+85%'
  type PString3 = '-85%'
  type PString4 = '85%'
  type PString5 = '85'
  
  type R1 = PercentageParser<PString1>  // expected ['', '', '']
  type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5>  // expected ["", "85", ""]
  ```
  
  > View on GitHub: https://tsch.js.org/1978
*/

// /^(\+|\-)?(\d*)?(\%)?$/

/* _____________ Your Code Here _____________ */
type Num = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type FilterCase<T extends string> = 
  T extends `${infer F}${infer Rest}`
    ? F extends Num
      ? FilterCase<Rest>
      : `${F}${FilterCase<Rest>}`
    : '';
type IsNumber<T extends string> = FilterCase<T> extends '' ? true : false;

type CheckPrefix<T> = T extends '+' | '-' ? T : false;
type CheckSuffix<T extends string> = T extends `${infer N}%` ?  [IsNumber<N> extends true ? N : '', '%']: [IsNumber<T> extends true ? T : '', ''];
type PercentageParser<A extends string> = A extends `${CheckPrefix<infer P>}${infer Rest}` ? [P, ...CheckSuffix<Rest>] : ['', ...CheckSuffix<A>];


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1978/answer
  > View solutions: https://tsch.js.org/1978/solutions
  > More Challenges: https://tsch.js.org
*/

