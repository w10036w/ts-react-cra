import * as React from 'react';
import Lazyload from 'react-lazyload';
import logo from '~asset/icons/linkedin.png'

// lazyload decorator fails, refer to
// https://github.com/jasonslyvia/react-lazyload/issues/166
class LazyloadScreen extends React.Component {
  public render() {
    return (
      <div className="screen screen-lazyload">
        <div className="lazyload-image">
          <p>simple lazyload one</p>
          <Lazyload height={400}>
            <img src={logo} />
          </Lazyload>
          <p>Load component only once and ignore then</p>
          <Lazyload height={400} once>
            <img src={logo} />
          </Lazyload>
          <p>be loaded when top dege is 100px from viewport</p>
          <Lazyload height={400} offset={100}>
            <img src={logo} />
          </Lazyload>
        </div>
      </div>
    )
  }
}

export default LazyloadScreen
