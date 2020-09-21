import React, { useState } from 'react';

function Login () {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-5 col-xl-4 my-5">

        <h1 className="display-4 text-center mb-3">
          Sign in
        </h1>

        <form>
          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              className="form-control"
              placeholder="johndoe"
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Password</label>
              </div>
            </div>

            <div className="input-group">
              <input
                type={passwordShown ? 'text' : 'password'}
                className="form-control form-control-appended"
                placeholder="Enter your password"
              />

              <div
                className="input-group-append cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <span className="input-group-text">
                  <i
                    className={`fe fe-${passwordShown ? 'eye-off' : 'eye'}`
                  }></i>
                </span>
              </div>
            </div>
          </div>

          <button className="btn btn-lg btn-block btn-primary mb-3">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
