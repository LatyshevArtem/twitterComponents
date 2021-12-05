import './App.css';
import { ActualAndSearchForm } from './components/ActualAndSearchForm';
import { HatProfile } from './components/HatProfile';
import { Post } from './components/Post.jsx';
import { PostCreation } from './components/PostCreation';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Post logoImage="images/logoImage.jpg" postImage="images/postImage.jpg"/>
      <SideBar />
      <PostCreation profileImage="images/profileImage.png"/>
      <HatProfile hatImage="images/hatImage.jpg" communityLogo="images/communityLogo.jpg" />
      <ActualAndSearchForm />
    </div>
  );
}

export default App;
