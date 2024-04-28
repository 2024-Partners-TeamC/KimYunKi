import React from 'react';
import './Profile.css'
import pic from '../../128690416.jpg'

function Profile() {
  return (
    <div className='profile'>
      <div className='main'>
        <img className='picture' src={pic} alt=""/>
        <h1 className='name'>김윤기</h1>
        <h2 className='job'>Full-Stack Engineer</h2>
      </div>
        <h3 className='phrase'>사람을 강하게 만드는 것은 사람이 하는 일이 아니라, 하고자 노력하는 것이다</h3>
        <p className='great'>어니스트 헤밍웨이</p>
    </div>
  );
}

export default Profile;