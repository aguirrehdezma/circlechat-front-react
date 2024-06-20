import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = () => {
    const { state } = useAuth();

    return state.user.isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute