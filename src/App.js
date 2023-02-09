import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offer/Offer';
import Order from './Components/Order/Order';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Offer/>
      <Products/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
