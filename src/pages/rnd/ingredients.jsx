import React from 'react';
import Ingredientss from "../../component/r&d/ingredientss.jsx";
import Header from "../../component/global/header.jsx";
import bg1 from "../../assets/contact/Img1.webp";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Ingredients',route: '/ingredients'},
]

function Ingredients() {
    return (
        <>
            <Header  bgImg={bg1} heading={'Ingredients'} breadcrumbs={breadCrumbs}  />
            <Ingredientss/>
        </>
    );
}

export default Ingredients;