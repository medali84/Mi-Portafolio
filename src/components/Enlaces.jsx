import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinWithCircle from '@iconify/icons-mdi/linkedin';
import "./Enlaces.css"
import "./CommonStyles.css"



export const Enlaces = () => {
  return (
    <div>
        
            <div className='common-component'>
              <div className='enlace-datos'>
                <h1 className='mi-nombre'>MOHAMED ALI</h1>
                <h3 className='profesion'>Jonior Developer</h3> 
                <button className='icon-button' onClick={() => window.open("https://github.com/medali84")}>
                <Icon icon={githubIcon} width={45} color="#928a97" />
                </button>
                <button className='icon-button' onClick={() => window.open("https://www.linkedin.com/in/mohamed-ali-hmaidi/")}>
                <Icon icon={linkedinWithCircle} width={45} color="#928a97" />
                </button>
              </div>
             
            </div>
            
             
          
        
    </div>
  )
}

export default Enlaces;