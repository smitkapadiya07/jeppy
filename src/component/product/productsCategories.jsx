import React from 'react';
import {Box, Container, Divider, Grid} from "@mui/material";
import abcd from '../../assets/image/product/ABCD.png'
import {useNavigate} from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function ProductsCategories() {

    const navigate = useNavigate();

    // const products = [
    //     {label: "2D PAPAD SNACKS", path: "/product/2d-papad-snacks"},
    //     {label: "3D PAPAD SNACKS", path: "/product/3d-papad-snacks"},
    //     {label: "GLUTEN FREE PAPAD SNACKS", path: "/product/gluten-free-papad-snacks"},
    //     {label: "MICRO PAPAD PELLETS", path: "/product/micro-papad-pellets"},
    //     {label: "POTATO PAPAD SNACKS", path: "/product/potato-papad-snacks"},
    //     {label: "PROTEIN PAPAD SNACKS", path: "/product/protein-papad-snacks"},
    //     {label: "SHEETED PAPAD SNACKS", path: "/product/sheeted-papad-snacks"},
    //     {label: "VEGGI SNACKS PAPAD SNACKS", path: "/product/veggi-snacks-papad-snacks"}
    // ]

    const Categories = [
        {
            "img": abcd,
            "text": "Soy Micropellet with poppy seeds",

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
            <Container maxWidth={"xl"}>
                <Box sx={{
                    padding: "0 15px"
                }}>

                    {/*<Box sx={{*/}
                    {/*    fontSize: "72px",*/}
                    {/*    color: "#373737",*/}
                    {/*    fontWeight: "600",*/}
                    {/*    letterSpacing: "2px",*/}
                    {/*    textTransform: "uppercase",*/}
                    {/*    lineHeight: "1.1",*/}
                    {/*}}>*/}
                    {/*    Product*/}
                    {/*</Box>*/}
                    {/*<Divider sx={{borderColor: "#000", margin: "35px 0", width: "10%"}}/>*/}
                    {/*<Grid container spacing={3}>*/}
                    {/*    {products.map((item, index) => {*/}
                    {/*        const isActive = location.pathname === item.path;*/}
                    {/*        return (*/}
                    {/*            <Grid item xs={12} sm={6} md={3} key={index}>*/}
                    {/*                <Box*/}
                    {/*                    onClick={() => navigate(`${item.path}`)}*/}
                    {/*                    sx={{*/}
                    {/*                        color: isActive ? "grey" : "#000",*/}
                    {/*                        textDecoration: "none",*/}
                    {/*                        cursor: "pointer",*/}
                    {/*                        lineHeight: "23px",*/}
                    {/*                        fontSize: "13px",*/}
                    {/*                        "&:hover": {*/}
                    {/*                            color: "grey",*/}
                    {/*                        },*/}
                    {/*                    }}>*/}
                    {/*                    {item.label}*/}
                    {/*                </Box>*/}
                    {/*            </Grid>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</Grid>*/}

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={6}>
                        </Grid>

                        <Grid item xs={12} sm={12} md={8} lg={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: {
                                        xs: "center",
                                        sm: "flex-start",
                                    },
                                    gap: 2,
                                    padding: 1,
                                }}
                            >
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            padding: { xs: "0 5px", sm: "0 10px" },
                                            flex: { xs: "1 0 100%", sm: "1 0 45%", md: "1 0 30%", lg: "1 0 22%" },
                                        }}
                                    >
                                        Showing 60 results
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>




                    <Grid item xs={12} sm={6} md={9}>
                        <Grid container spacing={2}>
                            {Categories.map((item, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <Box
                                        sx={{
                                            margin: { xs: "15px 0", md: "25px 0 0" },
                                            cursor: "pointer",
                                            padding: { xs: "10px", md: "0" },
                                        }}
                                        onClick={() => navigate(`/products/${item.path}`)}
                                    >
                                        <Box
                                            sx={{
                                                cursor: "pointer",
                                                backgroundColor: "#A1A0A1",
                                                height: { xs: "300px", sm: "400px", md: "513px" },
                                                width: "100%",
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt="category"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    filter: "drop-shadow(0px 20px 15px rgba(229, 226, 221, 1))",
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            sx={{
                                                color: "#373737",
                                                cursor: "pointer",
                                                fontSize: { xs: "12px", md: "14px" },
                                                letterSpacing: "2px",
                                                marginTop: "10px",
                                                lineHeight: "30px",
                                                textTransform: "uppercase",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.text}
                                        </Box>

                                        <Box
                                            sx={{
                                                color: "#373737",
                                                cursor: "pointer",
                                                fontSize: { xs: "12px", md: "14px" },
                                                letterSpacing: "2px",
                                                lineHeight: "30px",
                                                textTransform: "uppercase",
                                                position: "relative",
                                                overflow: "hidden",
                                                transition: "all 0.3s ease-in-out",
                                                textAlign: "center",

                                                "&:hover": {
                                                    color: "#000",
                                                },

                                                "&:hover .discover-text": {
                                                    transform: "translateY(-30px)",
                                                },

                                                "&:hover .show-product": {
                                                    opacity: 1,
                                                    transform: "translateY(0)",
                                                },
                                            }}
                                        >
                                            <Box
                                                className="discover-text"
                                                sx={{
                                                    transition: "transform 0.3s ease-in-out",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                Discover <KeyboardArrowRightIcon />
                                            </Box>

                                            <Box
                                                className="show-product"
                                                sx={{
                                                    position: "absolute",
                                                    top: "20%",
                                                    left: "50%",
                                                    transform: "translate(-50%, 20px)",
                                                    width: "100%",
                                                    textAlign: "center",
                                                    color: "#373737",
                                                    opacity: 0,
                                                    transition: "all 0.3s ease-in-out",
                                                }}
                                            >
                                                Show Product
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>



                </Box>
            </Container>
        </Box>
    )
        ;
}

export default ProductsCategories;