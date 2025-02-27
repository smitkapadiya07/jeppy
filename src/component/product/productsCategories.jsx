import React from 'react';
import {Box, Container, Divider, Grid} from "@mui/material";
import abcd from '../../assets/image/ABCD.png'


function ProductsCategories() {

    const products = [
        "2D Papad Snacks", "3D Papad Snacks", "Glutein Free Papad Snacks", "Micro Papad Pellets", "Potato Papad Snacks",
        "Protein Papad Snacks", "Sheeted Papad Snacks", "Veggi Snacks Papad Snacks"
    ]

    const Categories = [
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
        },
    ];

    return (
        <Box sx={{
            padding: "120px 0"
        }}>
            <Container>
                <Box sx={{
                    padding: "0 15px"
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>

                    <Box className={"OpenSans"} sx={{
                        fontSize: "20px",
                        color: "#373737",
                        fontWeight: "600",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        lineHeight: "1.1",
                    }}>
                        Product categories
                    </Box>
                    <Divider sx={{borderColor: "#000", margin: "26.56px 0", width: "20%"}}/>
                            {products.map((item, index) => (
                                <Box
                                    className={"OpenSans"}
                                    key={index}
                                    sx={{
                                        color: "#000",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        lineHeight: "23px",
                                        fontSize: "13px",
                                    }}>
                                    {item}
                                </Box>
                            ))}
                        </Grid>

                        <Grid item xs={12} sm={6} md={9}>
                            <Grid container spacing={2}>
                                {Categories.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Box key={index} sx={{
                                            margin:"25px 0 0"
                                        }} >
                                            <Box
                                                sx={{
                                                    cursor: "pointer",
                                                    boxShadow: " rgb(166, 166, 166) 20px -60px 60px 30px inset, rgba(0, 0, 0, 0.3) 100px 10px 100px 10px inset"
                                                }}>

                                                <img
                                                    src={item.img}
                                                    alt="category"
                                                    style={{maxWidth: "100%", height: "auto",}}
                                                />
                                            </Box>

                                            <Box
                                                className={"OpenSans"}
                                                sx={{
                                                    color: "#373737",
                                                    cursor: "pointer",
                                                    textAlign: "center",
                                                    fontSize: "14px",
                                                    letterSpacing: "2px",
                                                    marginTop: "20px",
                                                    lineHeight: "30px",
                                                    textTransform: "uppercase",
                                                }}>
                                                {item.text}
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>


                </Box>
            </Container>
        </Box>
    )
        ;
}

export default ProductsCategories;