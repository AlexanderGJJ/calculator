import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const ctx = useContext(AuthContext);

  const login = () => ctx.login(email, password);
  const logout = () => ctx.logout();
  const registration = () => ctx.registration(email, password);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input
        onChange={onChangeEmail}
        type="text"
        placeholder="email"
        value={email}
      />
      <input
        onChange={onChangePassword}
        type="text"
        placeholder="pass"
        value={password}
      />
      <button onClick={login}>Login</button>
      <button onClick={registration}>Registration</button>
      <button onClick={logout}>logOut</button>
    </div>
  );
};
