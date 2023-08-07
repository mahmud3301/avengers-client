import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import {useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className='items-center min-h-screen'><progress className="progress progress-error mx-auto justify-center items-center mt-[25%]  w-100"></progress></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;