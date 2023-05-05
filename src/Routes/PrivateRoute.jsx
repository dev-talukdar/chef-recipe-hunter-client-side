import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom'; 
import LoadingSpinner from '../Spinner/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const{user, loading} = useContext(AuthContext)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>        
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;