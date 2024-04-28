import React from 'react';
import './Education.css'

function Education() {
  return <div className='education'>
    <div className='eduWrapper'>
      <div className='edu-grade'>
        <span className='edu-icon'/>
        <p>high school</p>
        </div>
      <div className='edu-descript'>인천전자마이스터고등학교</div>
      <div className='edu-descript'>전자제어과</div>
      <div className='edu-date'>2014.03 ~ 2017.01</div>
    </div>
    <div className='eduWrapper'>
      <div className='edu-grade'>
      <span className='edu-icon'/>
        <p>university</p>
      </div>
      <div className='edu-descript'>한국공학대학교</div>
      <div className='edu-descript'>임베디드시스템</div>
      <div className='edu-date'>2023.03 ~ 2025.02 졸업예정</div>
    </div>
  </div>
}

export default Education;