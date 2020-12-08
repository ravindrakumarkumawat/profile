import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Account = () => {
  return (
    <div className="profile-settings">
        <div className="account">
          <h4>Accounts</h4>
          <p>Edit and manage your account details</p> 
          <div className="account-details"> 
            <ul>
              <li>
                <img src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png" />
                <div>
                  <h4>Steve Jobs</h4>
                  <p>American business magnate</p>
                </div>
                <ArrowForwardIosIcon fontSize="small" />
              </li>

              <li>
                <div>
                  <p>Email</p>
                  <h4>stevejobs@apple.com</h4>
                </div>
                <ArrowForwardIosIcon fontSize="small" />
              </li>

              <li>
                <div>
                  <p>Phone</p>
                  <h4>+91 9999999999</h4>
                </div>
                <ArrowForwardIosIcon fontSize="small" />
              </li>

           </ul>
          </div>
        </div>

        <div className="feedback" >
          <h4>Help and Feedback</h4>
          <p>Reach us with your feedback and questions</p>
          <div className="feedback-details">
          <ul>
              <li>
                <div>
                  <h4>FAQ and Videos</h4>
                </div>
                <ArrowForwardIosIcon fontSize="small" />
              </li>

              <li>
                <div>
                  <h4>Contact us</h4>
                </div>
                <ArrowForwardIosIcon fontSize="small" />
              </li>

           </ul>
          </div>
        </div>

      </div>
  )
}

export default Account
