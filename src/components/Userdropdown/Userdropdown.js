import React from 'react'
import './userdropdown.css'
import { toast } from 'react-toastify';
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../actions/userActions';

const Userdropdown = ({update}) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userLogin);
  const { name, email } = userState.userInfo;
  const logout = () => {
    dispatch(userLogout());
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