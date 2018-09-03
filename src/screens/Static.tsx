import * as React from 'react';
import { Link } from 'react-router-dom';

interface IRouteProps {
  location: {
    pathname: string
  }
  match?: {}
}

export default ({ location }: IRouteProps) => (
  <div>
    <h3>Static Page</h3>
    <div>
      <p>match: </p>
      <p>{location.pathname}</p>
      <b>
        <Link to="/">Back to Home</Link>
      </b>
    </div>
  </div>
)
