import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import {useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <progress className="progress progress-primary w-100"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;