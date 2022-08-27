import React from 'react';
import "../Css/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="container formm mt-5 d-flex justify-content-center text-center">
        <div className='all d-block'>
          <form>
            <div className="names">
              <div className="fname">
                <input
                  className='F_input'
                  type="text"
                  placeholder='First Name'
                  required />
              </div>
              <div className="lname">
                <input
                  className='L_input'
                  type="text"
                  placeholder='Last Name' />
              </div>
            </div>
            <div className="mail">
              <input
                className="I_mail"
                type="email"
                placeholder='Your E-mail'
                required />
            </div>
            <div className="message">
              <textarea
                placeholder='Type A Message For Me'
                style={{ height: "304px" }}
                className='I_msg' cols="" rows=""
                required
              />
            </div>
            <button className="Sbutton" onClick={() => {
              document.getElementsByTagName('input').innerHTML = " ";
            }
            } type="submit">Submit</button>
          </form>
        </div>
      </div>
    <div>
      
    </div>
    </>
  )
}

export default Contact
