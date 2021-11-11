import './App.css';
import Header from "./Header";
import Stories from './Stories';
import FeedForm from "./FeedForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />

      <div className="feedPosts">
        
      </div>
    </div>
  );
}

export default App;
