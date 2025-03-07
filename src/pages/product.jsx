import React from 'react';
import ProductsCategories from "../component/product/productsCategories.jsx";
import Header from "../component/global/header.jsx";
import bg1 from "../assets/image/product/bg2.jpeg";

function Product() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Product',route: '/product'},
    ]
    return (
        <>
            <Header  bgImg={bg1} heading={'Products'} breadcrumbs={breadCrumbs}  />
            <ProductsCategories />
        </>
    );
}

export default Product;
