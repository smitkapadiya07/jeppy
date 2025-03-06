import React from 'react';
import ProductsCategories from "../component/product/productsCategories.jsx";
import Header from "../component/global/header.jsx";
import bg1 from "../assets/contact/Img1.webp";

function Product() {

    const breadCrumbs = [
        {label:'We believe that the highest quality is achieved through the development of new generation processes: discover them.'},
    ]

    return (
        <>
            <Header  bgImg={bg1} heading={'Products'} breadcrumbs={breadCrumbs}  />
            <ProductsCategories />
        </>
    );
}

export default Product;
