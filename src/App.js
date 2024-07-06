import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards'
import FeedbackCards from './Components/FeedbackCards';
import Why from './Components/Why';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Cards />
      <FeedbackCards />
      <Why />
    </div>
  );
}

export default App;