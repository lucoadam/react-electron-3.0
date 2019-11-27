// @flow
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  }
}
