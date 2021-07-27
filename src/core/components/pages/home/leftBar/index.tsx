import React from 'react'
import './styles.scss'
const LeftBar = () => {
    return <div className="left-bar">
        <div className="intro-web">
            <p className="info-web"><a href="/#topdep">DEV Community</a> is a community of 659,408 amazing developers</p>
            <p className="other">
                We're a place where coders share, stay up-to-date and grow their careers.
            </p>
            <button>Follow us</button>
        </div>
        <div className="side-bar">
            <ul>
                <li>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/home.png?alt=media&token=9f0b7d52-79eb-4867-903b-2cb1421b41d2"
                        alt="home"
                        />
                    Home
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" />
                    Home
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" />
                    Home
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" />
                    Home
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" />
                    Home
                </li>
                <li>
                    <i className="fa fa-home" aria-hidden="true" />
                    Home
                </li>
            </ul>
        </div>
        <div className="pop-tags">
            <h4>Popular Tags</h4>
            <ul>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
                <li>
                    <span>#React</span> 
                    <button>Fllow</button>
                </li>
            </ul>
        </div>
    </div>
}

export default React.memo(LeftBar)