import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 간단한 로그인 로직
    if (username === 'admin' && password === 'admin') {
      onLogin();  // 로그인 성공 시 콜백 호출
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
      <div style={{ width: 505, height: 701, background: 'white', boxShadow: '0px 4px 64px rgba(0, 0, 0, 0.05)', borderRadius: 10, border: '0.50px #878787 solid', padding: 20 }}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: '500' }}>Welcome!</h2>
        <h3 style={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: '300' }}>Sign in to MytoSeek</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontFamily: 'Poppins', fontWeight: '400' }}>User name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your user name"
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '0.60px #282828 solid' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'Poppins', fontWeight: '400' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '0.60px #282828 solid' }}
            />
          </div>
          {error && <div style={{ color: 'red', fontFamily: 'Poppins', fontWeight: '400' }}>{error}</div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontFamily: 'Poppins', fontWeight: '300' }}>
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" style={{ background: 'none', border: 'none', color: '#4D4D4D', fontFamily: 'Poppins', fontWeight: '300', cursor: 'pointer' }}>Forgot Password?</button>
          </div>
          <button type="submit" style={{ width: '100%', padding: 15, background: 'black', color: 'white', borderRadius: 6, border: 'none', fontFamily: 'Poppins', fontWeight: '500' }}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 20, fontFamily: 'Poppins', fontWeight: '300' }}>
          Don’t have an account? <button type="button" style={{ background: 'none', border: 'none', color: 'black', fontFamily: 'Poppins', fontWeight: '600', cursor: 'pointer' }}>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
