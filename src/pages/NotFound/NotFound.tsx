import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Not Found
      <Link to="/">go to main</Link>
    </div>
  );
};

export { NotFound };
