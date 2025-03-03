import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/global/Jeppy_Logo-1_121x68.jpg"; // Ensure path is correct

function Footer() {
    return (
    <Box sx={{
        marginBottom:"20px"
    }}>
        <Box sx={{ backgroundColor: "#fff", color: "#0033A1", padding:"60px 0px 150px 0px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">

                    {/* Left Section - Logo (50%) */}
                    <Grid item xs={12} md={5} sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Box component="img" src={logo}  alt="Company Logo" sx={{ maxWidth: "150px" }} />
                    </Grid>

                    {/* Right Section - Address, Contacts, Quick Links (50%) */}
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={2}>

                            {/* Address */}
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" sx={{ fontWeight: "500", mb: 1 }}>Address</Typography>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>
                                    Via dell'Industria, 24 <br />
                                    Zona Industriale Paludi <br />
                                    32016 - Alpago - (BL) <br />
                                    Italy
                                </Typography>
                            </Grid>

                            {/* Contacts */}
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" sx={{ fontWeight: "500", mb: 1 }}>Contacts</Typography>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>T +39 0437 989130</Typography>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>F +39 0437 989188</Typography>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>E info@valin.net</Typography>
                            </Grid>

                            {/* Quick Links */}
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" sx={{ fontWeight: "500", mb: 1 }}>Quick Links</Typography>
                                <Link to={"/certificate"} style={{
                                    display: "block",
                                    textDecoration: "none",
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    marginBottom: "5px",
                                    "&:hover": { color: "#0033A1", textDecoration: "underline" }
                                }}>Certificate</Link>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>Terms & Conditions</Typography>
                                <Typography variant="body2" sx={{
                                    color: "#000",
                                    transition: "color 0.3s ease",
                                    "&:hover": { color: "#0033A1" }
                                }}>Privacy Policy</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Container>

        </Box>
        <Box sx={{
            borderBottom:"1px solid rgba(182, 190, 204, 0.2)",
            width: "100%",
        }}>
        </Box>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "25px",
            fontSize:"14px"
        }}>
            <Box>© 2022 V.AL.IN. SRL – VAT IT00767150253</Box>
            <Box>Privacy & Cookie Policy</Box>
            <Box>Bolded by we-go-logo</Box>
        </Box>
    </Box>
    );
}

export default Footer;
