/**
 * @file Type Tests - isAppEnv
 * @module tutils/guards/tests/unit-d/isAppEnv
 */

import type { AppEnv } from '#src/enums'
import type testSubject from '../is-app-env'

describe('unit-d:guards/isAppEnv', () => {
  it('should guard AppEnv', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<AppEnv>()
  })
})
