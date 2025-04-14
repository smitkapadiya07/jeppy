import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Paper } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import logo from "../../assets/global/Jeppy_Logo-1_121x68.jpg"; // Updated logo
import snackIcon from "../../assets/global/nachos.png";

const usefulLinks = ["Home", "About Us", "We Care", "Blog", "Career", "Contact Us"];
const products = ["Panipuri", "2D", "3D", "Rice Papad", "Potato Based", "Event & Exhibition"];
const socialLinks = [
    { icon: <Facebook />, url: "#" },
    { icon: <Twitter />, url: "#" },
    { icon: <LinkedIn />, url: "#" },
    { icon: <Instagram />, url: "#" }
];

const Footer = () => {
    return (
        <Box sx={{
            background: "#003361", // Updated gradient to match logo
            color: "#fff",
            py: 5,
            boxShadow: "0 -5px 10px rgba(0,0,0,0.3)",
        }}>
            <Container>
                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4} textAlign="center">
                        <Box elevation={3} sx={{ borderRadius: 3, }}>
                            <img src={logo} height={80} alt="Jeppy Logo" style={{ maxWidth: "100%" }} />
                            <Typography variant="body2" sx={{color: "#FFFFFF",mt:2}}>
                                Incredible Snacks for Every Occasion!
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Useful Links */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ borderBottom: "2px solid #000000", pb: 1 }}>
                            Useful Links
                        </Typography>
                        {usefulLinks.map((link, index) => (
                            <Link key={index} href="#" color="inherit" underline="none" sx={{
                                display: "block",
                                mt: 1,
                                transition: "color 0.3s, transform 0.3s",
                                '&:hover': { color: "#000000", transform: "translateX(5px)" }
                            }}>
                                {link}
                            </Link>
                        ))}
                    </Grid>

                    {/* Products */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" sx={{ borderBottom: "2px solid #000000", pb: 1 }}>
                            Products
                        </Typography>
                        {products.map((product, index) => (
                            <Link key={index} href="#" color="inherit" underline="none" sx={{
                                display: "block",
                                mt: 1,
                                transition: "color 0.3s, transform 0.3s",
                                '&:hover': { color: "#000000", transform: "translateX(5px)" }
                            }}>
                                {product}
                            </Link>
                        ))}
                    </Grid>

                    {/* Social Media */}
                    <Grid item xs={12} md={4} textAlign="center">
                        <Typography variant="h6" sx={{ borderBottom: "2px solid #000000", pb: 1 }}>
                            Follow Us
                        </Typography>
                        <Box display="flex" justifyContent="center" gap={1} mt={1}>
                            {socialLinks.map((social, index) => (
                                <IconButton key={index} href={social.url} sx={{
                                    color: "#003361",
                                    bgcolor: "#fff",
                                    '&:hover': {
                                        bgcolor: '#003361',
                                        color:"#FFF",

                                    }
                                }}>
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                        <img src={snackIcon} alt="Snack Icon" width={60} style={{ marginTop: "25px", filter: "invert(100 %)" }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;