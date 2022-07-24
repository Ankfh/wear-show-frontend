import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                WEARSHOW
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" component={HomeScreen}></Route>
              <Route path="/product/:_id" component={ProductScreen}></Route>
            </Routes>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
