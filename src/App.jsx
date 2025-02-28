import './App.css'
import Home from "./pages/HomePage/home.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Profile from "./pages/Profile/profile.jsx";
import Navigation from "./component/global/navigation.jsx";
import Footer from "./component/global/footer.jsx";
import Product from "./pages/product.jsx";
import Header from "./component/global/header.jsx";
import Shapes from "./pages/rnd/shapes.jsx";
import Ingredients from "./pages/rnd/ingredients.jsx";
import Methodss from "./pages/rnd/methodss.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <Home/>
            <Contacts/>
            <Header/>
            <Product/>
            {/*<Footer/>*/}
            {/*<Profile/>*/}
            {/*<Shapes/>*/}
            <Ingredients/>
            <Methodss/>
        </>
    )
}

export default App
