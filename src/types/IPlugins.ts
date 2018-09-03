/**
 * https://github.com/bvaughn/react-virtualized/
 * for List.renderRow
 */
export interface IRenderRow {
  index: number
  isScrolling?: boolean
  key: number | string
  style: {} // https://github.com/bvaughn/react-virtualized/issues/822
}
