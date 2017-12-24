import * as React from 'react';
import './Login.scss';


export class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <section className="Login">
        <form className="Login_form">
          <div className="form-group">
            <label htmlFor="input-email">Email</label>
            <input id="input-email" className="form-control" type="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="input-password">Password</label>
            <input id="input-password" className="form-control" type="password"/>
          </div>
          <button type="submit" className="Login_form_btn btn btn-primary">Submit</button>
        </form>
      </section>
    );
  }
}
