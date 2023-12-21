import React from "react";
import images from "../../images";
import { Link } from "react-router-dom";
import logo from '../../Images/cleartrip-seeklogo.com.svg'
import '../Footer/footer.css'

const Footer =  () =>{


    return (<>
        <div id="footer">
            <div id="footer-logo">
            <Link to='/'><div><img width={'220px'} height={'50px'} src={logo} alt="" /></div></Link>
            </div>
            <div id="footer-right">
                <div id="footer-right-upper">
                    <div className="footer-nav-link"><Link to='/aboutus'>About Us</Link></div>
                    <div className="footer-nav-link"><Link to='/careers'>Careers</Link></div>
                    <div className="footer-nav-link"><Link to='/faqs'>FAQs</Link></div>
                    <div className="footer-nav-link"><Link to='/support'>Support</Link></div>
                    <div className="footer-nav-link"><Link to='/collections'>Collections</Link></div>
                </div>
                <div id="footer-right-lower">
                    <div id="footer-copyright">© 2023 Cleartrip Pvt. Ltd.</div>
                    <div id="footer-social-media">
                    <div id="footer-connetion">Connect </div>   
                        <div><Link to='/'><img width={'24px'} src={images.facebook} alt="" /></Link></div>
                        <div><Link to='/'><img width={'24px'} src={images.instagram} alt="" /></Link></div>
                        <div><Link to='/'><img width={'24px'} src={images.twitter} alt="" /></Link></div>
                        <div><Link to='/'><img width={'24px'} src={images.linkedin} alt="" /></Link></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Footer;