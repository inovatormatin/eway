import React,{useContext} from 'react'
import './userdropdown.css'
import userContext from '../../context/user/userContext'
import { toast } from 'react-toastify';
import { FiLogOut } from "react-icons/fi";

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
    <div className='userDropdown'>
        <div className='upperTriangle'></div>
        <h2>{name}</h2>
        <p>{email}</p>
        <hr />
        <li onClick={() => logout()}><FiLogOut />Logout</li>
    </div>
  )
}
export default Userdropdown;