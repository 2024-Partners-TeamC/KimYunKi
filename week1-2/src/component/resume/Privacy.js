import React from 'react'
import './Privacy.css'
import mailLogo from '../../ic--outline-email.svg'
import githubLogo from '../../mdi--github.svg'
import mediumLogo from '../../mingcute--medium-fill.svg'
import velogLogo from '../../simple-icons--velog.svg'


function Privacy() {
  return <div className='privacy'>
    <div className='info'>
        <img className='logo' src={mailLogo} alt=''/>
        <div className='link'>
          <p>email</p>
          <div className='email'>kalsagansteve@gmail.com</div>
        </div>
    </div>
    <div className='info'>
        <img className='logo' src={githubLogo} alt=''/>
        <div className='link'>
          <p>github</p>
          <div className='github'>https://github.com/kalsteve</div>
        </div>
    </div>
    
    <div className='info'>
        <img className='logo' src={mediumLogo} alt=''/>
        <div className='link'>
          <p>medium</p>
          <div className='medium'>https://medium.com/@kalsagansteve</div>
        </div>
    </div>
    
    <div className='info'>
        <img className='logo' src={velogLogo} alt=''/>
        <div className='link'>
          <p>velog</p>
          <div className='velog'>https://velog.io/@kalsteve98/posts</div>
        </div>
    </div>
  </div>
}

export default Privacy;