import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const loggedInUser = useSelector(state => state.auth.loggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RequireAuth