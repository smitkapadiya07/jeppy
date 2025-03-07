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
import Singleinsight from "./component/insight/singleinsight.jsx";
import Inquirys from "./pages/Inquirys/inquirys.jsx";

function App() {
    const actions = [
        {icon: <EmailIcon />, name: 'Email', link: 'mailto:example@example.com'},
        {icon: <PhoneEnabledIcon />, name: 'contact', link: 'tel:+1234567890'},
        {icon: <WhatsAppIcon />, name: 'whatsapp', link: 'https://wa.me/1234567890'},
    ];

    const ripple = keyframes`
        0% {
            box-shadow: 0 0 0 0 #035F9E;
        }
        50% {
            box-shadow: 0 0 10px 5px #035F9E;
        }
        100% {
            box-shadow: 0 0 15px 10px #035F9E;
        }
    `;
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contacts/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/rnd/shape" element={<Shapes />}/>
                <Route path="/rnd/ingredients" element={<Ingredients />}/>
                <Route path="/rnd/methode" element={<Methodss />}/>
                <Route path="/products/:id" element={<ProductSingle/>}/>
                <Route path="/certificate" element={<Certificates/>}/>
                <Route path="/insight" element={<Insight/>}/>
                <Route path="/singleinsight" element={<Singleinsight/>}/>
                <Route path="/inquiry" element={<Inquirys/>}/>
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
                        sx={{backgroundColor: "#FFF", color: "#035F9E"}}
                    />
                }
                FabProps={{
                    sx: {
                        backgroundColor: "#FFF",
                        animation: `${ripple} 1.5s infinite ease-out`,
                        '&:hover': {backgroundColor: "#FFF"}// Ripple always running
                    }
                }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        sx={{
                            backgroundColor: "#FFF",
                            color: "#035F9E",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            '&:hover': { backgroundColor: "#035F9E", color: '#FFF' }
                        }}
                        key={action.name}
                        icon={
                            <a href={action.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {action.icon}
                            </a>
                        }
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>

            <Footer/>
        </>
    )
}

export default App
