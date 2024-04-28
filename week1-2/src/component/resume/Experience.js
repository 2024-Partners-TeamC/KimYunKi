import React from 'react';
import './Experience.css'
import partLogo from '../../4939935906278_b7c8a0653f88aabea251_88.png'
import techeerLogo from '../../Techeer-Logo.png'

function Experience() {
  return <div className='experience'>
    <div className='explist'>
    <div className='expDot'></div>
    <div className='expDate'>Jun 23 ~ Dec 23</div>
    </div>
    <div className='expWrapper'>
    <div className='expSection'>
      <img src={partLogo} alt='' />
      <div className='expContent'>
        <div className='expTitle'>Study</div>
        <div className='expText'>테커파트너스 3기</div>
      </div>
    </div>
    </div>
    <div className='explist'>
    <div className='expDot'></div>
    <div className='expDate'>Dec 23 ~ Feb 9</div>
    </div>
    <div className='expWrapper'>
    <div className='expSection'>
      <img className='tech-img' src={techeerLogo} alt='' />
    <div className='expContent'>
      <div className='expTitle'>Bootcamp</div>
      <div className='expText'>실리콘밸리 SW 윈터 부트캠프</div>
    </div>
    </div>
    </div>
    <div className='explist'>
    <div className='expDot'></div>
    <div className='expDate'>Mar 16 ~ </div> 
    </div>
    <div className='expWrapper'>
    <div className='expSection'>
      <img src={partLogo} alt='' />
    <div className='expContent'>
      <div className='expTitle'>Study</div>
      <div className='expText'>테커파트너스 4기</div>
    </div>
    </div>
    </div>
  </div>
}

export default Experience;