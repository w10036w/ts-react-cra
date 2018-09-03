import * as React from 'react';
import { Link } from 'react-router-dom';

export default class AntScreen extends React.PureComponent {
  public render() {
    return (
      <div className="screen screen-ant">
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>
          <li>
            <Link to="/ant/modal">Modal Demo</Link>
          </li>
          <li>
            <Link to="/ant/form">Form Demo</Link>
          </li>
        </ul>
      </div>
    )
  }
}
