import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <div style={styles.avatarContainer}>
        <img
                  src="/images/logos/logo1.png"
                  width={100}
                />
        </div>
        <h2 style={styles.title}>Login Page</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <FaUser style={styles.icon} />
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <FaLock style={styles.icon} />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <div style={styles.footer}>
       
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  loginBox: {
    width: '320px',
    padding: '40px',
    borderRadius: '15px',
    backgroundColor: '#fff',
    // boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
    boxShadow: '0 8px 16px rgba(0, 123, 255, 0.2), 0 6px 20px rgba(0, 123, 255, 0.15)',
    textAlign: 'center',
  },  
  avatarContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#4B4B4B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: '10px',
    borderRadius: '25px',
    marginBottom: '15px',
  },
  icon: {
    marginRight: '10px',
    color: '#333',
  },
  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    borderRadius: '25px',
    backgroundColor: '#0056b3',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
  },
};

export default Login;
