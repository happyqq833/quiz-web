import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, updateUser } from '../../services/userService';
import './EditProfile.css';
function EditProfile() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(id);
        if (response.length > 0) {
          setProfileData(response[0]); 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData, 
      [name]: value, 
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await updateUser(id, profileData); 
      if (response) {
        console.log("User updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className='container'>
      <form className='form-edit-profile' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full name: </label>
          <br/>
          <input
            type="text"
            id="name"
            name="fullName"
            value={profileData.fullName || ''} 
            onChange={handleChangeInput} 
          />
        </div>
        <div>
          <label htmlFor="gender">Giới tính: </label>
          <br/>
          <input
            type="text"
            id="gender"
            name="gender"
            value={profileData.gender || ''} 
            onChange={handleChangeInput} 
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email || ''} 
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <br/>
          <input
            type="text"
            id="country"
            name="country"
            value={profileData.country || ''} 
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="city">City/town: </label>
          <br/>
          <input
            type="text"
            id="city"
            name="city"
            value={profileData.city || ''} 
            onChange={handleChangeInput}
          />
        </div>

        <button className='form-edit-profile__btn' type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProfile;
