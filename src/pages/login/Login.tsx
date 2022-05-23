import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';

function Login() {
  return (
    <div>
      1
      <LoginForm />
      <Link to="/">index</Link>
    </div>
  );
}

export { Login };
