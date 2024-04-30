import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const AdminRoutes = () => {
  const { user } = useSelector((state) => state.userSlice);
  return user === null || !user?.isAdmin ? <Navigate to='/' replace /> : <Outlet />;
}

export default AdminRoutes