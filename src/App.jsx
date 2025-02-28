import './App.css'
import Profile from "./pages/profile.jsx";
import Contacts from "./pages/contacts.jsx";
import Navigation from "./component/global/navigation.jsx";
import Home from "./pages/home.jsx";
import Footer from "./component/global/footer.jsx";
import Product from "./pages/product.jsx";
import {Route, Routes} from "react-router-dom";
import Shapes from "./pages/rnd/shapes.jsx";
import Methodss from "./pages/rnd/methodss.jsx";
import Ingredients from "./pages/rnd/ingredients.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/product/:name" element={<Product/>}/>
                <Route path="/rnd/shape" element={<Shapes />}/>
                <Route path="/rnd/ingredients" element={<Ingredients />}/>
                <Route path="/rnd/methode" element={<Methodss />}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
