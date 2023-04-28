import Pages from "./pages/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
