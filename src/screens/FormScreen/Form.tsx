import * as React from 'react';
import HorizontalLoginForm from '../../components/common/formitem/SimpleLogin';

class FormScreen extends React.PureComponent {
  public componentDidMount() {
    // something
  }

  public render() {
    return (
      <div className="screen screen-form">
        <HorizontalLoginForm />
      </div>
    )
  }
}

export default FormScreen
