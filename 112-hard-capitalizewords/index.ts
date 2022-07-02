/*
  112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #hard #template-literal
  
  ### Question
  
  Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.
  
  For example
  
  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```
  
  > View on GitHub: https://tsch.js.org/112
*/


/* _____________ Your Code Here _____________ */

type Alphabet = 'a' | 'b' | 'c' | 'd' | 'e' |
  'f' | 'g' | 'h' | 'i' | 'j' |
  'k' | 'l' | 'm' | 'n' | 'o' |
  'p' | 'q' | 'r' | 's' | 't' |
  'u' | 'v' | 'w' | 'x' | 'y' |
  'z' | 'A' | 'B' | 'C' | 'D' | 
  'E' | 'F' | 'G' | 'H' | 'I' | 
  'J' | 'K' | 'L' | 'M' | 'N' | 
  'O' | 'P' | 'Q' | 'R' | 'S' | 
  'T' | 'U' | 'V' | 'W' | 'X' | 
  'Y' | 'Z';

type CapitalizeFn<S extends string> = S extends `${infer F}${infer R}`
  ? F extends Alphabet
    ? `${F}${CapitalizeFn<R>}`
    : `${F}${CapitalizeFn<Capitalize<R>>}`
  : ''

  type CapitalizeWords<S extends string> =  CapitalizeFn<Capitalize<S>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/112/answer
  > View solutions: https://tsch.js.org/112/solutions
  > More Challenges: https://tsch.js.org
*/

