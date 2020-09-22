import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, errors, handleSubmit, watch } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = (data) => {
    setLoading(true);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-5 col-xl-4 my-5">
        <h1 className="display-4 text-center mb-3">Sign in</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Username</label>

            <input
              placeholder="johndoe"
              name="username"
              type="text"
              ref={register({ required: true })}
              className={`
                  ${errors.username ? 'is-invalid' : ''}
                  form-control
                `}
            />

            {errors.username && (
              <div className="invalid-feedback">Username cannot be blank.</div>
            )}
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Password</label>
              </div>
            </div>

            <div className="input-group input-group-feedback">
              <input
                placeholder="Enter your password"
                name="password"
                type={passwordShown ? 'text' : 'password'}
                ref={register({ required: true })}
                className={`
                    ${errors.password ? 'is-invalid' : ''}
                    form-control form-control-appended
                  `}
              />

              <div
                className="input-group-append cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <span className="input-group-text">
                  <i
                    className={`fe fe-${passwordShown ? 'eye-off' : 'eye'}`}
                  ></i>
                </span>
              </div>

              {errors.password && (
                <div className="invalid-feedback">
                  Password cannot be blank.
                </div>
              )}
            </div>
          </div>

          <button
            className="btn btn-lg btn-block btn-primary"
            disabled={!watch('username') || !watch('password') || loading}
          >
            <span className="mr-3">Sign in</span>

            {loading && (
              <span
                className="spinner-grow spinner-grow-sm"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
