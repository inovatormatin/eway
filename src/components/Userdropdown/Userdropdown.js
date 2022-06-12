import React,{useContext} from 'react'
import './userdropdown.css'
import userContext from '../../context/user/userContext'
import { toast } from 'react-toastify';

const Userdropdown = ({update}) => {
    const userInfo = useContext(userContext);
    const {name, email} = userInfo.user;
    const logout = () => {
        userInfo.setIsUserLoggedIn(false);
        localStorage.removeItem('authtoken');
        update(false);
        toast.success('Logged out !')
    }
  return (
    <div>
        <h2>Hello {name}</h2>
        <p>{email}</p>
        <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
export default Userdropdown;