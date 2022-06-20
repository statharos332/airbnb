
import Navbar from './nav-bar';
import SimpleSlider from './slider'
import Banners from './Banners'
import Cards from './Cards';
import './App.css';
import GiftCards from './GiftCards';
import Questions from './Question';

function App() {
  return (
    <div>
    <Navbar />
    <SimpleSlider/>
    <Banners />
    <div className="home_cards">
      <Cards src="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg" 
      title="Things to do on your trip"
      button="Experiences"
      />
      <Cards
      src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg" 
      title="Hello"
      button="Experiences"
      />
    </div>
    <GiftCards />
    <Questions />
    </div>
  );
}

export default App;
