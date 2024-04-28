import './Resume.css'
import Profile from './component/resume/Profile';
import Privacy from './component/resume/Privacy';
import Experience from './component/resume/Experience';
import Education from './component/resume/Education';
import Project from './component/resume/Project'
import Skill from './component/resume/Skill';
import dot from './dot.svg';
import NavBar from './component/NavBar';

export default function Resume() {
    return (
        <div className='appPage'>
      <div className='container'>
        <div className='Header'>
        <Profile/>
        <hr/>
        <Privacy/>
        </div>
      </div>
      <div className='container2'>
        
        <div className='content'>
          <div className='divider'>
            <div className='divider-dot'>
              <img src={dot} alt='dot' />
            </div>
            <div className='divider-line'/>
          </div>
          <div className='section'>
            <p>Latest projects</p>
            <Project/>
          </div>
        </div>
        <div className='content'>
          <div className='divider'>
            <div className='divider-dot'>
              <img src={dot} alt='dot' />
            </div>
            <div className='divider-line'/>
          </div>
          <div className='section'>
            <p>Experience</p>
            <Experience/>
          </div>
        </div>
        <div className='content'>
          <div className='divider'>
          <div className='divider-dot'>
              <img src={dot} alt='dot' />
            </div>
            <div className='divider-line'/>
          </div>
          <div className='section'>
            <p>Education</p>
            <Education/>
          </div>
        </div>
        <div className='content'>
          <div className='divider'>
          <div className='divider-dot'>
              <img src={dot} alt='dot' />
            </div>
            <div className='divider-line'/>
          </div>
          <div className='section'>
            <p>Skill</p>
            <Skill/>
            </div>
        </div>
      
      </div>
    </div>
    );
    }