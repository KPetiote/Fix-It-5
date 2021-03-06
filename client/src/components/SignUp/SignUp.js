import React, { Component } from "react";
import "./style.css"

export default class SignUp extends Component {
    render() {
        return (
          <form>
          <div className="divHead">
          <h3>Sign Up</h3>
          <h6>It's quick and easy.</h6>
          </div>
          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
              Already registered <a className="green" href="/signin">sign in?</a>
          </p>
      </form>
        );
    }
}