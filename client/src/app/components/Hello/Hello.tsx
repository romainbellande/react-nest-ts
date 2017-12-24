import * as React from 'react';
import './Hello.scss';

export class Hello extends React.Component<{}, {}> {
  public render() {
    return (
      <section className="Hello">
        Hello you
      </section>
    );
  }
}
