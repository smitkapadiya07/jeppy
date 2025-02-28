import React from 'react';
import {Box, Container, Divider, Grid} from "@mui/material";
import abcd from '../../assets/image/product/ABCD.png'
import {useNavigate} from "react-router-dom";


function ProductsCategories() {

    const navigate = useNavigate();

    const products = [
        {label: "2D PAPAD SNACKS", path: "/product/2d-papad-snacks"},
        {label: "3D PAPAD SNACKS", path: "/product/3d-papad-snacks"},
        {label: "GLUTEN FREE PAPAD SNACKS", path: "/product/gluten-free-papad-snacks"},
        {label: "MICRO PAPAD PELLETS", path: "/product/micro-papad-pellets"},
        {label: "POTATO PAPAD SNACKS", path: "/product/potato-papad-snacks"},
        {label: "PROTEIN PAPAD SNACKS", path: "/product/protein-papad-snacks"},
        {label: "SHEETED PAPAD SNACKS", path: "/product/sheeted-papad-snacks"},
        {label: "VEGGI SNACKS PAPAD SNACKS", path: "/product/veggi-snacks-papad-snacks"}
    ]

    const Categories = [
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd12",
            path: "abcd12",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
        },
        {
            "img": abcd,
            "text": "Abcd",
            path: "abcd",
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

                            <Box sx={{
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
                            {products.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Box
                                        key={index}
                                        onClick={() => navigate(`${item.path}`)}
                                        sx={{
                                            color: isActive ? "grey" : "#000",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                            lineHeight: "23px",
                                            fontSize: "13px",
                                            "&:hover": {
                                                color: "grey",
                                            },
                                        }}>
                                        {item.label}
                                    </Box>
                                );
                            })}

                        </Grid>

                        <Grid item xs={12} sm={6} md={9}>
                            <Grid container spacing={2}>
                                {Categories.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Box key={index} sx={{
                                            margin: "25px 0 0",
                                            cursor:"pointer",
                                        }}
                                        onClick={() => navigate(`/products/${item.path}`)}
                                        >
                                            <Box
                                                sx={{
                                                    cursor: "pointer",
                                                    backgroundColor: "#A1A0A1",
                                                }}>

                                                <img
                                                    src={item.img}
                                                    alt="category"
                                                    style={{maxWidth: "100%", height: "auto",filter: "drop-shadow(0px 20px 15px rgba(229, 226, 221, 1))"}}
                                                />
                                            </Box>

                                            <Box
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