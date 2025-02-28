import './App.css'
import Profile from "./pages/profile.jsx";
import Contacts from "./pages/contacts.jsx";
import Navigation from "./component/global/navigation.jsx";
import Home from "./pages/home.jsx";
import Footer from "./component/global/footer.jsx";
import Product from "./pages/product.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/product/:name" element={<Product/>}/>
                <Route path="/rnd/:name" element={<Product/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
