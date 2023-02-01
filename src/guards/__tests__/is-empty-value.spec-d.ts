/**
 * @file Type Tests - isEmptyValue
 * @module tutils/guards/tests/unit-d/isEmptyValue
 */

import type { EmptyValue } from '#src/types'
import type testSubject from '../is-empty-value'

describe('unit-d:guards/isEmptyValue', () => {
  it('should guard EmptyValue', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<EmptyValue>()
  })
})
