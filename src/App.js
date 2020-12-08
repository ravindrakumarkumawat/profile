import './App.css'
import Account from './components/accounts/Account';
import ProfileCard from './components/profileCard/ProfileCard';

function App() {
  return (
    <div className="profile">
      <ProfileCard />
      <Account />
    </div>
  );
}

export default App;
