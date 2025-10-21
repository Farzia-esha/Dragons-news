import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading }= use(AuthContext);
    // console.log(user);

    const location = useLocation();
    // console.log(location);

    //loading
    if(loading) {
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to= '/auth/login'></Navigate>

    //if user-> return children
    // return  children ;
    //navigate --> login
};

export default PrivateRoute;