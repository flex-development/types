/**
 * @file Markdownlint Configuration
 * @module config/markdownlint
 * @see https://github.com/DavidAnson/markdownlint
 */

module.exports = {
  MD001: true,
  MD002: {
    level: 1
  },
  MD003: {
    style: 'consistent'
  },
  MD004: {
    style: 'consistent'
  },
  MD005: true,
  MD006: true,
  MD007: {
    indent: 2,
    start_indent: 2,
    start_indented: false
  },
  MD009: {
    br_spaces: 2,
    list_item_empty_lines: false
  },
  MD010: {
    code_blocks: true,
    spaces_per_tab: 1
  },
  MD011: true,
  MD012: {
    maximum: 1
  },
  MD013: {
    code_block_line_length: 80,
    code_blocks: true,
    headers: true,
    heading_line_length: 80,
    headings: true,
    line_length: 80,
    stern: false,
    strict: false,
    tables: false
  },
  MD014: true,
  MD018: true,
  MD019: true,
  MD020: true,
  MD021: true,
  MD022: {
    lines_above: 1,
    lines_below: 1
  },
  MD023: true,
  MD024: {
    allow_different_nesting: false,
    siblings_only: false
  },
  MD025: {
    front_matter_title: '^\\s*title\\s*[:=]',
    level: 1
  },
  MD026: {
    punctuation: '.,;:!。，；：！'
  },
  MD027: true,
  MD028: true,
  MD029: {
    style: 'one_or_ordered'
  },
  MD030: {
    ol_multi: 1,
    ol_single: 1,
    ul_multi: 1,
    ul_single: 1
  },
  MD031: {
    list_items: true
  },
  MD032: true,
  MD033: {
    allowed_elements: [
      'a',
      'br',
      'code',
      'div',
      'figcaption',
      'figure',
      'img',
      'sub',
      'sup'
    ]
  },
  MD034: true,
  MD035: {
    style: 'consistent'
  },
  MD036: {
    punctuation: '.,;:!?。，；：！？'
  },
  MD037: true,
  MD038: true,
  MD039: true,
  MD040: true,
  MD041: {
    front_matter_title: '^\\s*title\\s*[:=]',
    level: 1
  },
  MD042: true,
  MD043: true,
  MD044: {
    code_blocks: true,
    names: []
  },
  MD045: true,
  MD046: {
    style: 'consistent'
  },
  MD047: true,
  MD048: {
    style: 'consistent'
  },
  MD049: {
    style: 'consistent'
  },
  MD050: {
    style: 'consistent'
  },
  default: true,
  extends: null
}
