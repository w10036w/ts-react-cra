import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  public componentDidMount() {
    // something
  }

  public render() {
    return (
      <div className="screen screen-home">
        <h1>Home</h1>
        <h2>Routes</h2>
        <ul>
          <li>
            <Link to="/user">User Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/static">Static Page</Link>
          </li>
          <li>
            <Link to="/pagination">Long_List_Pagination Page</Link>
          </li>
          <li>
            <Link to="/async">Async Page</Link>
          </li>
          <li>
            <Link to="/form">Form Page</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
