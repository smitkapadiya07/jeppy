import React from 'react';
import Homeinsight from "../component/insight/homeinsight.jsx";
import Header from "../component/global/header.jsx";
import img from '../assets/image/header/Cover_listing_desk.jpg'
import Singleinsight from "../component/insight/singleinsight.jsx";

function Insight() {


    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Insight',route: '/insight'},
    ]

    return (
        <>

            <Header  bgImg={img} heading={'Insight'} breadcrumbs={breadCrumbs}  />
            <Homeinsight/>
            {/*<Singleinsight/>*/}
        </>
    );
}

export default Insight;