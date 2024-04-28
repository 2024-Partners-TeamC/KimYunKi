import React from 'react';
import './Project.css'
import projectLogo from '../../LogoTM2.png'
import nodeLogo from '../../skill-icons--nodejs-dark.svg'
import nginxLogo from '../../skill-icons--nginx.svg'
import stackLogo from '../../skill-icons--stackoverflow-dark.svg'

function Project() {
  return <div className='project'>
    <div className='projectTitle'>
        <img className='projectLogo' src={projectLogo} alt=''/>
        <div className='projectName'>
            <div className='project1'>Tairot / 2023.12 ~ 2024.02</div>
            <div className='projectDescription'>Chatgpt api를 활용한 심리 상담 서비스</div>
        </div>
    </div>
    <td colSpan="2">
        <div className='projectContents'>
            <div className='projectContent1'>
                <img className='nodeLogo' src={nodeLogo} alt=''/>
                <ul>nodejs로 채용시장을 고려한 프레임 워크 선택
                    <li>chatgpt api sse 수신 및 비동기 처리</li>
                    <li>socket.io를 이용한 클라이언트 채팅 실시간 전송</li>
                    <li>clovaTTS mp3파일을 바이트로 나누어 버퍼로 실시간 전송 구현</li>
                    <li>OOP 구현 적용 시도</li>
                </ul>
                
            </div>
            <div className='projectContent2'>
                <img className='nginxLogo' src={nginxLogo} alt=''/>
                <ul>NGINX를 이용한 웹 서버 구현
                    <li>TLS/SSL 보안을 let's encrypt와 certbot으로 구현</li>
                    <li>로드 밸런싱 시도</li>
                    <li>무중단 배포 시도</li>
                </ul>
            </div>
        </div>
    </td>
    <div className='techStack'>
        <img className='stackLogo' src={stackLogo} alt=''/>
        <div className='stackGroup'>
            <div className='techIntroduce'>기술 스택</div>
            <div className='techName'>nodejs express nginx socket.io</div>
        </div>
    </div>
  </div>
}

export default Project;