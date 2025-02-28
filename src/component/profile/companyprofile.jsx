import React from "react";
import {Box, Typography, Grid, Container} from "@mui/material";
import img1 from "../../assets/image/CompanyProfile/batches.png"
import img2 from "../../assets/image/CompanyProfile/mt product.png"
import img3 from "../../assets/image/CompanyProfile/shapes.png"
import img4 from "../../assets/image/CompanyProfile/formulations.png"

const statsData = [
    {icon: img1, value: "150+", label: "R & D BATCHES PER YEAR"},
    {icon: img2, value: "200", label: "MT/DAY PRODUCTION"},
    {icon: img3, value: "300+", label: "SHAPES"},
    {icon: img4, value: "1000s", label: "OF FORMULATIONS"},
];

const companyDescription = [
    {text: "The demand for snacks is rising around the world, snack producing companies are in fierce competition to match this demand." +
            " Our company <strong> JAYANT SNACKS AND BEVERAGES PVT. LTD.</strong> LTD. is a leading manufacturer and exporter of ready to fry Papad Snacks." +
            " It was founded in the year <strong> 1987</strong> in the city of Rajkot in the western state of India. The company popularly known " +
            "as <strong>“JEPPY”</strong> and <strong>“WOW”</strong> has <strong> 30+ years</strong> of extensive experience in the field of Snack Papad production. Today JEPPY is a prime" +
            " leader in the Snacks Papad industry in India."},
    {text: "Jeppy strives towards producing the best ready to fry snacks and ready to air roast Papad Snacks in the market. " +
            "This portfolio of snacks encompasses <strong> 2D, 3D, laminated and punched shape.</strong> Jeppy formulates new shapes and excellent " +
            "base taste from <strong> Cereals, Lentils, Vegetables, and Multigrain flours</strong> which customers would love and expect. " +
            "The fine textures and crispiness of Snack Papad have made us win our customer’s hearts."},
    {text: "Our company operates on director’s core purpose as such “To Empower & Enrich Our Customers by Providing Innovative formulations," +
            " Consistent taste, and Plenteous Quantity of products” We believe “Research and development is in our DNA”;" +
            " <strong> WOW</strong> conducts research on an average of <strong> 100-150</strong> products every year on formulations and shapes. " +
            "We have developed more than <strong> 300</strong> creative shapes and 1000s of Papad Snack formulations. " +
            "We offer large quantity whilst not compromising on consistent quality." +
            " With this, <strong> Jeppy</strong> has effectively created brand value and a customer base in the market. " +
            "creative shapes and <strong>1000s</strong> of Papad Snack formulations."},
    {text: "The Papad Snack are used by the snacks industries to consume as deep-fried or hot air roasted to expand the shape." +
            " <strong> We offer customized products for our customers on a domestic and international scale.</strong> Jeppy’ s outstanding facilities" +
            " alongside the option of customization of snacks has increased its demand in the market for Papad snacks, leading it to " +
            "expand and establish four subsidiary plants and is still enthusiastically expanding."},
    {text: "With the company’s vision and its core purpose, <strong> JEPPY </strong> has set itself up as a reliable brand that" +
            "<strong> guarantees a 100%</strong> steady and plenteous supply of snacks to our customers with a vision<strong> “To Be the" +
            " Global Leader in Snack Papad Industry.”</strong>"},

];

const CompanyProfile = () => {
    return (
        <Box sx={{bgcolor: "#FFFFF9", padding: "120px 0"}}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            {statsData.map((stat, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        mb: {xs: 2, sm: 4, lg: 5},
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{margin: "0 0 22px"}}>
                                        <img src={stat.icon} alt={stat.label} style={{
                                            width: "80px", height: "80px",
                                            // margin: "0px 241px"
                                        }}/>
                                    </Box>

                                    <Box sx={{
                                        fontSize: "56px",
                                        lineHeight: "60px",
                                        color: "#626262",
                                        // padding:"0 10px 0 0"
                                    }}>
                                        {stat.value}
                                    </Box>

                                        <Box
                                            sx={{
                                                margin: "28px 0 0",
                                                color: "#626262",
                                                fontWeight: "bold",
                                                fontSize: "20px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {stat.label}
                                        </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Right Column - Company Description */}
                    <Grid item xs={12} md={6}>
                        {companyDescription.map((paragraph, index) => (
                            <Box
                                key={index}
                                sx={{
                                    mb: {xs: 2, md: 3, lg: 2},
                                    lineHeight: "23px",
                                    fontSize: {xs: 13, md: 13, lg: 13},
                                    width: {xs:"100%",sm:"100%",md:"90%"},
                                }}
                                dangerouslySetInnerHTML={{__html: paragraph.text}}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};


export default CompanyProfile;
