import React from 'react';
import './Skill.css'

function Skill() {
  return <div className='skill'>
    <ul>
        <li>
          <div className='intro-card'>
            <div className='language-outcircle'>
              <div className='language-icon'/>
            </div>
          <p>Language</p>
          </div>
          <div className='card-body'>
            <div className='language-font-color'>
           <p>C</p>
            <p>C++</p>
            <p>JAVA</p>
            <p>Kotlin</p>
            <p>Python</p>
            <p>JavaScript</p>
            </div>
            </div>
        </li>
        <li>
            <div className='intro-card'>
            <div className='database-outcircle'>
              <div className='database-icon'/>
            </div>
            <p>Database</p>
            </div>
            <div className='card-body'>
            <div className='database'>
            <p>MYSQL</p>
            </div>
            </div>
        </li>
        <li>
            <div className='intro-card'>
              <div className='framework-outcircle'>
                <div className='framework-icon'/>
              </div>
            <p>Framework & Library</p>
            </div>
            <div className='card-body'>
              <div className='framework'>
            <p>nodejs</p>
            <p>Express</p>
            <p>spring boot</p>
            </div>
            </div>
        </li>
    </ul>
  </div>
}

export default Skill;