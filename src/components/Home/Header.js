import React from 'react'
import './Header.css'
import character from './../../assets/char.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'

const Header = () => {
    return (
        <section className='head'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>Welcome,
                            <br />I'm Mohamed Abdallah</h1>
                        <p>A Web Developer building a dynamic and responsive websites.
                        </p>
                        <a href='https://www.linkedin.com/in/mohamedabdallah17/' target='blank'> <FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='https://github.com/mohamed17-a' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <Button id="resumeBtn" href='https://drive.google.com/file/d/11LnrjYH8Syf7FP_tDppkXvQySw6U5_9H/view?usp=sharing' target='blank'>Resume <FontAwesomeIcon icon={faDownload} /></Button>
                    </div>
                    <div className='col-md-4 imgdiv'>
                        <img src={character} alt='My Character' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
