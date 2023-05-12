/**
 * @file Test Fixtures - Author
 * @module tests/fixtures/Author
 */

/**
 * Object representing an author.
 */
interface Author {
  /**
   * Author's email address.
   */
  email: Lowercase<string>

  /**
   * Author's first name.
   */
  first_name: string

  /**
   * Author's first name.
   */
  last_name: string
}

export type { Author as default }
