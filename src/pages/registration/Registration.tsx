import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function Registration() {
  const userName = useAppSelector(((state) => state.user.name));

  return (
    <div>
      registration
      { userName }
      <Link to="login">login</Link>
    </div>
  );
}

export { Registration };
