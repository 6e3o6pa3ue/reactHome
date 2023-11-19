import * as React from 'react';
import "../../Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer(props) {

    return (
        <footer>
            <div className="another-background">
                <div className="rights">
                    <div className="add-info">
                        <p className="add-info-item">Terms of Use</p>
                        <p className="add-info-item">Privisy-Policy</p>
                        <p className="add-info-item">FAQ</p>
                        <p className="add-info-item">Watch List</p>
                    </div>
                    <div className="copyrights">
                        <p className="copyrights-text">© 2023 WATCHIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved. </p>
                    </div>
                </div>
                <div className="followUs">
                    <p className='text-follow'>Follow Us:</p>
                    <div className="icons">
                        <div className="icon">
                            <FacebookIcon className='imgIcon'/>
                        </div>
                        <div className="icon">
                            <TwitterIcon className='imgIcon'/>
                        </div>
                        <div className="icon">
                            <GoogleIcon className='imgIcon'/>
                        </div>
                        <div className="icon">
                            <GitHubIcon className='imgIcon'/>
                        </div>
                    </div>
                </div>
                <div className="watchItApp">
                    <p className="thisApp">
                        Watchit App
                    </p>
                    <div className="stores">
                        <div className="google__store store">
                            <p className='comment'>Get it on</p>
                            <div className="store">
                                <img src="https://cdn-icons-png.flaticon.com/128/6124/6124997.png" alt="#" className='icon-store' />
                                <p className="store-name">Google Play</p>
                            </div>
                        </div>
                        <div className="apple__store">
                            <p className='comment'>Download on the</p>
                            <div className="store">
                                <img src="https://cdn-icons-png.flaticon.com/128/179/179309.png" alt="#" className='icon-store' />
                                <p className="store-name">App Store</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}