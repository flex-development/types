/**
 * @file Type Guards - isNodeEnv
 * @module tutils/guards/isNodeEnv
 */

import NodeEnv from '#src/enums/node-env'

/**
 * Checks if `value` is a {@link NodeEnv}.
 *
 * @param {any} [value=process.env.NODE_ENV] - Value to check
 * @return {boolean} `true` if `value` is valid node environment
 */
const isNodeEnv = (value: any = process.env.NODE_ENV): value is NodeEnv => {
  return Object.values(NodeEnv).includes(value as NodeEnv)
}

export default isNodeEnv
