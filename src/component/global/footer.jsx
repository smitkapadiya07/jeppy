import React from 'react';
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import {useNavigate} from "react-router-dom";

const links = [
    { name: "Certificates", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" }
];

const productCategories = [
    { label: "2D PAPAD SNACKS", path: "2d-papad-snacks" },
    { label: "3D PAPAD SNACKS", path: "3d-papad-snacks" },
    { label: "GLUTEN FREE PAPAD SNACKS", path: "gluten-free-papad-snacks" },
    { label: "MICRO PAPAD PELLETS", path: "micro-papad-pellets" },
    { label: "POTATO PAPAD SNACKS", path: "potato-papad-snacks" },
    { label: "PROTEIN PAPAD SNACKS", path: "protein-papad-snacks" },
    { label: "SHEETED PAPAD SNACKS", path: "sheeted-papad-snacks" },
    { label: "VEGGI SNACKS PAPAD SNACKS", path: "veggi-snacks-papad-snacks" }
];

const productCounts = [41, 24, 11, 3, 9, 10, 31, 10];

function Footer() {

    const navigate = useNavigate();

    return (
        <Box sx={{ backgroundColor: "#0082ca", color: "white" }}>
            <Box sx={{ py: { xs: 2, sm: 4 }, textAlign: { xs: "center", sm: "start" } }}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={5} md={2}>
                            <Box sx={{ padding: "0 15px" }}>
                                <Typography sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1"
                                }}>QUICK LINKS</Typography>
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
                                            textDecoration: "underline"
                                        }
                                    }}>{link.name}</Link>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} md={2}>
                            <Box sx={{ padding: "0 15px" }}>
                                <Typography sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1"
                                }}>GET IN TOUCH</Typography>
                                <Box sx={{ margin: "0 0 22px", cursor: "pointer" }}>
                                    <Typography sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline"
                                        }
                                    }}>hello@jeppy.in</Typography>
                                    <Typography sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline"
                                        }
                                    }}>+91 75758 08749</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Box sx={{ padding: "0 15px", mt: { xs: 3, md: 0 } }}>
                                <Typography sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1"
                                }}>ADDRESS</Typography>
                                <Box sx={{ margin: "0 0 22px" }}>
                                    <Typography sx={{
                                        color: "#e9e9e2",
                                        fontSize: "14px",
                                        letterSpacing: ".02em",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        fontWeight: "600"
                                    }}>Registered Office :</Typography>
                                    <Typography sx={{
                                        color: "#e9e9e2",
                                        fontSize: "14px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        fontWeight: "600"
                                    }}>JAYANT SNACKS AND BEVERAGES PVT. LTD.</Typography>
                                    <Typography sx={{
                                        color: "#e9e9e2",
                                        fontSize: "13px",
                                        letterSpacing: "1px",
                                        textDecoration: "none",
                                        lineHeight: "23px",
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#ffffff",
                                            textDecoration: "underline"
                                        }
                                    }}>
                                        27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh Bridge, Rajkot - 360003 (Gujarat) India.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ padding: "0 15px", mt: { xs: 3, md: 0 } }}>
                                <Typography sx={{
                                    color: "#e9e9e2",
                                    fontSize: "18px",
                                    marginBottom: "20px",
                                    letterSpacing: "2px",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    lineHeight: "1.1"
                                }}>PRODUCT CATEGORY</Typography>
                                {productCategories.map((category, index) => (
                                    <Box key={index} sx={{display:"flex" , alignItems:"center"}}>
                                        <Box sx={{
                                            color: "#e9e9e2",
                                            fontSize: "13px",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            textDecoration: "none",
                                            lineHeight: "23px",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "#ffffff",
                                                textDecoration: "underline"
                                            }
                                        }}
                                        onClick={() => {navigate(`/product/${category.path}`)}}
                                        >
                                            {category.label}
                                        </Box>
                                        <Box sx={{
                                            color: "#626262",
                                            textDecoration: "none"
                                        }}> ({productCounts[index]})
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box mt={4} sx={{
                backgroundColor: "#014A77",
                textAlign: "center",
                py: 1
            }}>
                <Typography sx={{
                    color: "#e9e9e2",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: "23px"
                }}>
                    &copy; COPYRIGHT 2004 - 2025 JAYANT SNACKS AND BEVERAGES PVT. LTD. ALL RIGHTS RESERVED. POWERED
                    BY <strong>WEBSMANIAC INC.</strong>
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
