import * as React from 'react'
import { Link } from 'react-router-dom'

class About extends React.PureComponent {
  public componentDidMount() {
    // something
  }

  public render() {
    return (
      <div className="screen screen-about">
        <h1>About</h1>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default About
