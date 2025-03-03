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
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import { keyframes } from '@mui/system';
import ProductSingle from "./pages/productSingle.jsx";
import Certificates from "./pages/certificates.jsx";
import Insight from "./pages/insight.jsx";

function App() {
    const actions = [
        {icon: <EmailIcon/>, name: 'Email'},
        {icon: <PhoneEnabledIcon/>, name: 'contact'},
        {icon: <WhatsAppIcon/>, name: 'whatsapp'},
    ];

    const ripple = keyframes`
        0% { box-shadow: 0 0 0 0 rgba(219, 96, 24, 0.7); }
        50% { box-shadow: 0 0 15px 10px rgba(219, 96, 24, 0.5); }
        100% { box-shadow: 0 0 25px 20px rgba(219, 96, 24, 0); }
    `;
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
                <Route path="/products/:productName" element={<ProductSingle/>}/>
                <Route path="/certificate" element={<Certificates/>}/>
                <Route path="/insight" element={<Insight/>}/>
            </Routes>
            <SpeedDial
                ariaLabel="SpeedDial Ripple Effect"
                sx={{
                    position: 'fixed',
                    bottom: 50,
                    right: 100,
                }}
                icon={
                    <SpeedDialIcon
                        sx={{backgroundColor: "#DB6018", color: "white"}}
                    />
                }
                FabProps={{
                    sx: {
                        backgroundColor: "#DB6018",
                        animation: `${ripple} 1.5s infinite ease-out`,
                        '&:hover': {backgroundColor: "#DB6018"}// Ripple always running
                    }
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        sx={{
                            backgroundColor: "#DB6018",
                            color: "#035F9E",
                            '&:hover': {backgroundColor: "#DB6018"}
                        }}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>


            <Footer/>
        </>
    )
}

export default App
