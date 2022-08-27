import React from 'react';
import "../Css/Footer.css"

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <>
      <div className='this_footer'>
        <div className="footerDiv">
          <div className=''>
            <p> Copyright &copy; {year} , gourav98055@gmail.com</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Footer;
