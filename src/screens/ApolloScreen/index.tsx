import * as React from 'react';
import { Link } from 'react-router-dom';

export default class ApolloScreen extends React.PureComponent {
  public render() {
    return (
      <div className="screen screen-apollo">
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>
          <li>
            <Link to="/apollo/query">Query Demo</Link>
          </li>
          <li>
            <Link to="/apollo/mutation">Mutation Demo</Link>
          </li>
          <li>
            <Link to="/apollo/subscription">Subscription Demo</Link>
          </li>
        </ul>
      </div>
    )
  }
}
