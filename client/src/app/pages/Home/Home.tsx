import * as React from 'react';
import './Home.scss';

import { Login } from '../../components';

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <section>
        <Login />
      </section>
    );
  }
}
