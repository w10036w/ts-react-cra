import * as React from 'react';
import { LoadingComponentProps } from 'react-loadable';

export default (props: LoadingComponentProps): any => {
  if (props.error) {
    return (
      <div className="loading-error">
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      </div>
    )
  } else if (props.timedOut) {
    return (
      <div className="loading-error">
        <div>
          Taking a long time! <button onClick={props.retry}>Retry</button>
        </div>
      </div>
    )
  } else if (props.pastDelay) {
    return (
      <div className="loading">
        <div className={'loading-spinner spinner__medium'} />
      </div>
    )
  }
  return null
}
