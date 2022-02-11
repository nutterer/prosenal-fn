import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [ detail, setDetail ] = useState({ username:"", password:"" })

    const submitHandler = (e) =>{
        e.preventDefault();
        
        Login(detail);
    }
  return (
      <form onSubmit={submitHandler}>
        <div className="form-inner">
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id='username' onChange={e => setDetail({...detail, username: e.target.value})} value={detail.username} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id='password' onChange={e => setDetail({...detail, password: e.target.value})} value={detail.password}  />
            </div>
            <input type="submit" value="Login" />
        </div>
      </form>
  );
}

export { LoginForm };
