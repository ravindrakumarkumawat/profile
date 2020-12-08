import './App.css'
import Account from './components/accounts/Account';
import ProfileCard from './components/profileCard/ProfileCard';

function App() {
  return (
    <div className="profile">
      <div className="profile-overlay">
        <div className="profile-box"></div>
        <ProfileCard />
      </div>
      <Account />
    </div>
  );
}

export default App;
