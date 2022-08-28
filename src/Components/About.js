import React from 'react';
import "../Css/About.css";
import ProgressBar from "../Components/ProgressBar"


const About = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 d-flex justify-content-center align-items-center ms-auto">
                <h3>Welcome to <span className='page'>About Page</span></h3>
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10 pt-3 ">
                <p className='fdeveloper'>
                  <b> Front - End </b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-8 d-flex justify-content-center align-items-start">
                    <p className='fdeveloper'><b> Developer </b></p>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <p className='near_Fdeveloper_Text'> I am a Front-End developer and i am looking for opportunity to improve my self and am eager to learn more.<br />
                      Me Here, Looking for opportunities to grow myself</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container barDiv">
        <div className="contaier">
          <div className="row">
            <div className="col-12  d-flex justify-content-center align-items-center">
              <h3 className='skills'>My Skills</h3>
            </div>
          </div>
        </div>
        <ProgressBar tag="HTML" bgcolor="#FF0000" progress='80' height={25} />
        <ProgressBar tag="Css" bgcolor="#009EFA" progress='80' height={25} />
        <ProgressBar tag="Js" bgcolor="#FFC75F" progress='70' height={25} />
        <ProgressBar tag="ReactJS" bgcolor="#00D2FC" progress='65' height={25} />
      </div>
    </>
  )
}

export default About
