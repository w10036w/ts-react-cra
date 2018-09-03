import * as React from 'react';
import { Link } from 'react-router-dom';

class AppHeader extends React.PureComponent {
  public state = {
    count: 1,
  }
  public componentDidMount() {
    // something
    this.setState({ count: this.state.count + 1 })
  }

  public render() {
    return (
      <div className="app-header">
        <Link to="/">Home</Link>
        <h4>This is App Header: count: {this.state.count}</h4>
      </div>
    )
  }
}

export default AppHeader
