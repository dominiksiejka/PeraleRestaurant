import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/HomePage/Home";
import Meals from "./components/Meals/Meals";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AboutPage from "./components/AboutPage/AboutPage";
import ScrollTopFix from "./components/ScrollTopFix/ScrollTopFix";
import ContactPage from "./components/Contact/ContactPage";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router basename='/PeraleRestaurant'>
      <ScrollTopFix />
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/about' render={() => <AboutPage />} />
            <Route path='/shop' component={Meals} />
            <Route path='/contact' render={ContactPage} />
            <Redirect from='*' to='/' />
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
