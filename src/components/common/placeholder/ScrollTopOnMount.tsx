import * as React from 'react'

export default class ScrollTopOnMount extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0)
  }
  public render() {
    return null
  }
}
