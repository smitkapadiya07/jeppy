import './App.css'
import Profile from "./pages/profile.jsx";
import Navigation from "./component/global/navigation.jsx";
import Home from "./pages/home.jsx";
import Footer from "./component/global/footer.jsx";
import Product from "./pages/product.jsx";
function App() {

  return (
    <>
        <Navigation />
        <Product/>
        <Profile/>
        <Home/>
      <Footer />
    </>
  )
}

export default App
