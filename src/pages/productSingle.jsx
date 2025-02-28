import React from 'react';
import Header from "../component/global/header.jsx";
import SingleProduct from "../component/product/singleproducts.jsx";
import {useParams} from "react-router-dom";

function ProductSingle() {
    const { productName } = useParams();

    return (
        <>
            <Header title={productName}/>
            <SingleProduct/>
        </>
    );
}

export default ProductSingle;