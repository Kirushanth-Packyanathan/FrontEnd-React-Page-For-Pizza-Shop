import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <p>&copy; 2021 citypizza.com</p>
            
        </div>
    </div>
  )
}

export default Footer
