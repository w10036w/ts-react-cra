import * as React from 'react';
import logo from '~asset/icons/linkedin.png'

class Image extends React.Component {
  public render() {
    return (
      <div className="image">
        <header className="image-header">
          <img src={logo} className="image-logo" alt="logo" />
          <h1 className="image-title">Welcome to React</h1>
        </header>
        <p className="image-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Image
