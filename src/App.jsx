import './App.css'
import Profile from "./pages/Profile/profile.jsx";
import Navigation from "./component/global/navigation.jsx";
import Home from "./pages/home.jsx";
import Footer from "./component/global/footer.jsx";
import Product from "./pages/product.jsx";
import Header from "./component/global/header.jsx";

function App() {

  return (
    <>
        <Header />
        <Product/>
      <Footer />
        <Profile/>
        <Navigation />
        <Home/>
    </>
  )
}

export default App
