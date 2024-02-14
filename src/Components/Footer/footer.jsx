import React from 'react'
import './index.css';
function Footer() {
    return (
        <div className='page-footer'>
            <div className="footer"><div className="footer-links">
                <ul className="footer-nav-link-list">
                    <li className="footer-nav-link-item"><a href="/">Home</a></li>
                    <li className="footer-nav-link-item"><a href="/about">About</a></li>
                    <li className="footer-nav-link-item"><a href="/projects">Projects</a></li>
                    <li className="footer-nav-link-item"><a href="/articles">Articles</a></li>
                    <li className="footer-nav-link-item"><a href="/contact">Contact</a></li>
                </ul>
            </div>
                <div className="footer-credits">
                    <div className="footer-credits-text">© 2023 Tharindu.dev. All Rights Reserved.</div>
                </div>
            </div>

        </div>
    )
}

export default Footer