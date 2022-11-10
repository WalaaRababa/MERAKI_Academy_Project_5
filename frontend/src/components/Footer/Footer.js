import './footer.css'

const Footer =()=>{
    return (<footer className='footer'>

         <div className='footer-item select-box-wrapper-img'>
         <h2 className="contact-form-title">Nawa Given</h2>
        <h2 className="contact-form-title">Together we make change happen</h2>
        {/* <h2 className="contact-form-title">Find a cause that ignites your heart</h2> */}
        <div className='name-footer-image'>
        <div className='footer-imgs'>
         <img className='footer-img' src= 'http://khairah-react.themepresss.com/static/media/6.a66bb585.jpg'  alt=""/>
         </div>
         <div className='footer-imgs'>
         <img className='footer-img' src= 'http://khairah-react.themepresss.com/static/media/6.a66bb585.jpg'  alt=""/>
         </div>
         <div className='footer-imgs'>
         <img className='footer-img' src= 'http://khairah-react.themepresss.com/static/media/6.a66bb585.jpg'  alt=""/>
         </div>
         <div className='footer-imgs'>
         <img className='footer-img' src= 'http://khairah-react.themepresss.com/static/media/6.a66bb585.jpg'  alt=""/>
         </div>
         </div>
         </div>
        <div className='footer-item'>
            <h3 className='footer-item-title'>Support</h3>
            <ul className='footer-item-list'>
                <li className='footer-item-link'>Contact</li>
                <li className='footer-item-link'>Legal Notice</li>
                <li className='footer-item-link'>Privacy Policy</li>
                <li className='footer-item-link'>General Terms</li>
                <li className='footer-item-link'>Sitemap</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h3 className='footer-item-title'>Company</h3>
            <ul className='footer-item-list'>
                <li className='footer-item-link'>About Us</li>
                <li className='footer-item-link'>Careers</li>
                <li className='footer-item-link'>Blog</li>
                <li className='footer-item-link'>Press</li>
                <li className='footer-item-link'>Cards</li>
                <li className='footer-item-link'>Magazine</li>
                <li className='footer-item-link'>Guides</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h3 className='footer-item-title'>Work With Us</h3>
            <ul className='footer-item-list'>
                <li className='footer-item-link'>Become A Volunteer</li>
                <li className='footer-item-link'>Become An Affiliate Partner</li>
            </ul>
            <div className='footer-icons'>
                <div className='icon'>
                    <i style={{color:"#2980b9"}} className='bi bi-facebook'></i>
                </div>
                <div className='icon'>
                    <i style={{color:"#c0392b"}} className='bi bi-instagram'></i>
                </div>
                <div  className='icon'>
                    <i style={{color:"#3498db"}} className='bi bi-twitter'></i>
                </div>
                <div className='icon'>
                    <i style={{color:"darkblue"}} className='bi bi-linkedin'></i>
                </div>
            </div>
            <div className='footer-copyright'>© 2021 NawaGiver. All rights reserved </div>
            {/* <div className='footer-copyright'>© 2021 Khairah. All rights reserved </div> */}
        </div>
    </footer>)
}
export default Footer

         {/* <div className='footer-item select-box-wrapper'>
            <div className='select-box'>
                <label className='select-box-label'>Languages</label>
                < select className='select-box-input'></select>
            </div>
            <div className='select-box'>
                <label className='select-box-label'>Currencies</label>
                < select className='select-box-input'></select>
            </div>
         </div> */}