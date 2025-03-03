import React from 'react';
import ProductsCategories from "../component/product/productsCategories.jsx";
import Header from "../component/global/header.jsx";
import { useParams } from "react-router-dom";

function Product() {
    // const { name } = useParams();
    // const formattedName = name.replaceAll('-', ' '); // Replace dashes with spaces

    return (
        <>
            {/*<Header title={formattedName} />*/}
            <ProductsCategories />
        </>
    );
}

export default Product;
