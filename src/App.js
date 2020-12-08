import './App.css';
import { Button } from 'reactstrap'
import { Avatar } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function App() {
  return (
    <div className="profile">
      <div className="Profile-details">
        <div className="profile-details-header"></div>
        <div className="profile-details-card">
          <div className="profile-details-card-details">
            <Avatar src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png" />
            <div className="profile-details-card-info">
              <div className="user-info">
                <h3>Steve Jobs</h3>
                <p>American business magnate</p>
              </div>
              <div className="user-achivements">
                 <div>
                  <p>Articles</p>
                  <h5>34</h5>
                 </div>
                 <div>
                  <p>Followers</p>
                  <h5>980</h5>
                  </div>
                 <div>
                  <p>Rating</p>
                  <h5>8.9</h5>
                 </div>
              </div>
            </div>
          </div>
          <div className="profile-details-card-button">
            <Button outline color="primary">Chat</Button>
            <Button color="primary">Follow</Button>
          </div>

        </div>
        <div className="profile-details-works">
          <h4>Notable works</h4>
          <p>Based on the popularity of articles</p>
          <div className="article-container"> 
            <div className="article-details">
              <img src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png" />
              <p>Nature</p>
              <h5>Let us plant more trees from this year</h5>
            </div>

            <div className="article-details">
              <img src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png" />
              <p>Nature</p>
              <h5>Let us plant more trees from this year</h5>
            </div>

            <div className="article-details">
              <img src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png" />
              <p>Nature</p>
              <h5>Let us plant more trees from this year</h5>
            </div>           
          </div>

            
        </div> 

        <div className="profile-details-featured-article">
          <div> 
            <h6>Featured Articles</h6>
          </div>        
          <h4>Natural mood regulation low or even absent in people with depression</h4>
        </div>

      </div>

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
      
    </div>
  );
}

export default App;
