/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type Fallback from './fallback'
import type Joinable from './joinable'
import type NIL from './nil'
import type Stringify from './stringify'

/**
 * Converts array `T` to a single string delimited by `S`.
 *
 * If `S` is omitted, items will be separated with a comma (`,`).
 *
 * @see {@linkcode Joinable}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @todo examples
 *
 * @template T - Array to join
 * @template S - Array item separator
 */
type Join<
  T extends readonly Joinable[],
  S extends string = ','
> = T extends Readonly<EmptyArray>
  ? EmptyString
  : T extends readonly [Joinable?]
  ? Stringify<Fallback<T[0], EmptyString, NIL>>
  : T extends readonly [
      infer H extends Joinable,
      ...infer R extends readonly Joinable[]
    ]
  ? `${Fallback<H, EmptyString, NIL>}${S}${Join<R, S>}`
  : T extends readonly [
      ...infer R extends readonly Joinable[],
      infer L extends Joinable
    ]
  ? `${Join<R, S>}${S}${Fallback<L, EmptyString, NIL>}`
  : string

export type { Join as default }
