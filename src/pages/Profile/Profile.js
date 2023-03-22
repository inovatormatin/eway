import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../actions/userActions"
import { RingLoader } from "../../components";
import { TiUser } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiMapPin, BiBuildingHouse } from "react-icons/bi";
import { GiIsland, GiSmartphone, GiModernCity } from "react-icons/gi";
import { FaCity, FaRegAddressCard } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.userLogin);
  const [userInfo, setUserInfo] = useState({});
  const setFormValues = (user) => {
    setUserInfo({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      secondaryPhoneNumber: user.secondaryPhoneNumber,
      address: user.address,
      house_flat_no: user.house_flat_no,
      city: user.city,
      state: user.state,
      landmark: user.landmark,
      pincode: user.pincode,
    })
  };
  console.log(userState)
  useEffect(() => {
    if (userState.userInfo.name === undefined) {
      dispatch(getUserInfo())
    }
    setFormValues(userState.userInfo)
  }, [userState]) // eslint-disable-line
  return (
    <>
      {userInfo.name !== undefined ?
        <div className="profileSetting">
          <h2>
            My Profile
          </h2>
          <form className="profileSetting-form">
            <section>
              <p>
                <label htmlFor="name"><TiUser />Name</label>
                <input type="text" value={userInfo.name} />
              </p>
              <p>
                <label htmlFor="email"><HiOutlineMail />Email</label>
                <input type="email" defaultValue={userInfo.email} disabled />
              </p>
            </section>
            <section>
              <p>
                <label htmlFor="phoneNumber"><GiSmartphone />Phone (primary)</label>
                <input type="number" value={userInfo.phoneNumber} />
              </p>
              <p>
                <label htmlFor="secondaryPhoneNumber"><BiPhone />Phone (secondary)</label>
                <input type="number" value={userInfo.secondaryPhoneNumber} />
              </p>
              <p>
                <label htmlFor="pincode"><BiMapPin />Pincode</label>
                <input type="text" value={userInfo.pincode} />
              </p>
            </section>
            <section>
              <p>
                <label htmlFor="city"><GiModernCity />City</label>
                <input type="text" value={userInfo.city} />
              </p>
              <p>
                <label htmlFor="state"><FaCity />State</label>
                <input type="text" value={userInfo.state} />
              </p>
              <p>
                <label htmlFor="house_flat_no"><BiBuildingHouse />House / Flat No.</label>
                <input type="text" value={userInfo.house_flat_no} />
              </p>
            </section>
            <section>
              <p>
                <label htmlFor="address"><FaRegAddressCard />Address</label>
                <input type="text" value={userInfo.address} />
              </p>
              <p>
                <label htmlFor="landmark"><GiIsland />Landmark</label>
                <input type="text" value={userInfo.landmark} />
              </p>
            </section>
          </form>
        </div>
        :
        <RingLoader />
      }
    </>
  );
};

export default Profile;
