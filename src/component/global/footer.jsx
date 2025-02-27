import React from 'react';
import {Box, Container, Grid, Typography, Link} from "@mui/material";

const links = [
    {name: "Certificates", href: "#"},
    {name: "Terms & Conditions", href: "#"},
    {name: "Privacy Policy", href: "#"}
];

const productCategories = [
    "2D Papad Snacks", "3D Papad Snacks", "Gluten Free Papad Snacks",
    "Micro Papad Pellets", "Potato Papad Snacks", "Protein Papad Snacks",
    "Sheeted Papad Snacks", "Veggi Snacks Papad Snacks"
];

const productCounts = [41, 24, 11, 3, 9, 10, 31, 10];

function Footer() {
    return (
        <Box sx={{backgroundColor: "#0082ca", color: "white",}}>
            <Box sx={{ py: { xs: 2, sm: 4 },textAlign: {xs:"center" , sm:"start"}}}>
                <Container maxWidth="lg">
                    <Grid container >
                        <Grid item xs={12} sm={5} md={2}>
                            <Box sx={{
                                padding:"0 15px",
                            }}>
                                <Box sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1",
                                }}>QUICK LINKS</Box>
                                {links.map((link, index) => (
                                    <Link key={index} href={link.href} display="block" sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline",
                                        },
                                    }}>{link.name}</Link>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} md={2}>
                            <Box sx={{
                                padding:"0 15px"
                            }}>
                                <Box sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1",
                                }}>GET IN TOUCH</Box>
                                <Box sx={{
                                    margin:"0 0 22px",
                                    cursor:"pointer"
                                }}>
                                    <Box sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline",
                                        },
                                    }}> hello@jeppy.in</Box>
                                    <Box sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline",
                                        },
                                    }}>+91 75758 08749</Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Box sx={{
                                padding:"0 15px",
                                mt:{xs:3 , md:0}
                            }}>
                                <Box sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1",
                                }}>ADDRESS</Box>
                                <Box sx={{
                                    margin:"0 0 22px"
                                }}>
                                    <Box sx={{
                                        color: "#e9e9e2",
                                        fontSize: "14px",
                                        letterSpacing: ".02em",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        fontWeight:"600",
                                    }}>Registered Office :</Box>
                                    <Box sx={{
                                        color: "#e9e9e2",
                                        fontSize: "14px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        fontWeight:"600",
                                    }}>JAYANT SNACKS AND BEVERAGES PVT. LTD.</Box>
                                    <Box sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        cursor:"pointer",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline",
                                        },
                                    }}>27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh Bridge, Rajkot - 360003
                                        (Gujarat) India.</Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{
                                padding:"0 15px",
                                mt:{xs:3 , md:0}
                            }}>
                                <Box sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1",
                                }}>PRODUCT CATEGORY</Box>
                                {productCategories.map((category, index) => (
                                    <Box key={index} sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        cursor:"pointer",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline",
                                        },
                                    }}>
                                        {category} <span style={{ color: "#626262" , textDecoration:"none" }}>({productCounts[index]})</span>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box mt={4}  sx={{
                backgroundColor: "#014A77",
                textAlign:"center",
            }}>
                <Box sx={{
                    margin: {xl:"0 345px",lg:"0 177.5px" , md:"0 79.5px" , sm:"0 57px"},
                    padding: "8px 15px",
                    color: "#e9e9e2",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    textDecoration: "none",
                    lineHeight: "23px",
                }}>
                    &copy; COPYRIGHT 2004 - 2025 JAYANT SNACKS AND BEVERAGES PVT. LTD. ALL RIGHTS RESERVED.POWERED
                    BY <strong>WEBSMANIAC INC.</strong>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;