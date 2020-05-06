import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faTwitter, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter, Link } from 'react-router-dom';
import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-items">
                <ul className="other-icons">
                    <li>
                        <Link className="o-item" to="/terms-of-service">Terms of Service</Link>
                    </li>
                    <li>
                        <Link className="o-item" to="/privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
                <ul className="social-media-icons">
                    <li>
                        <a className="s-m-item" target="_blank" href="https://www.instagram.com/highginxbeatz/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a className="s-m-item" target="_blank" href="https://www.youtube.com/channel/UCC6vVSGKxYvRUndTr5-idMA/videos/">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                    <li>
                        <a className="s-m-item" target="_blank" href="https://twitter.com/highginxbeatz/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a className="s-m-item" target="_blank" href="https://open.spotify.com/artist/7AjVP6qbRPXkexTE8Ha9r4/">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    );
}




export default Footer;