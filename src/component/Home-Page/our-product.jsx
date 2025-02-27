import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img1 from "/src/assets/HomePage/OurProduct/Img2.png";
import Img2 from "/src/assets/HomePage/OurProduct/Img3.png";
import Img3 from "/src/assets/HomePage/OurProduct/Img4.png";
import Img4 from "/src/assets/HomePage/OurProduct/Img5.png";
import Img5 from "/src/assets/HomePage/OurProduct/Img6.png";
import Img6 from "/src/assets/HomePage/OurProduct/Img7.png";
import Img7 from "/src/assets/HomePage/OurProduct/Img8.png";
import Img8 from "/src/assets/HomePage/OurProduct/Img9.png";

function OurProduct() {

    const data = [
        {
            image: Img1,
            title : "2D Papad Snacks"
        },
        {
            image: Img2,
            title : "3D Papad Snacks"
        },
        {
            image: Img3,
            title : "Glutein Free Papad Snacks"
        },
        {
            image: Img4,
            title : "Micro papad pellets"
        },
        {
            image: Img5,
            title : "potato papad Snacks"
        },
        {
            image: Img6,
            title : "protein papad Snacks"
        },
        {
            image: Img7,
            title : "sheeted papad Snacks"
        },
        {
            image: Img8,
            title : "veggi snacks papad Snacks"
        },
    ]

    return (
       <Container maxWidth={'xl'}>
           <Box>
               <Box sx={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   color: '#373737',
                   fontSize: '28px',
                   fontWeight: '700',
                   lineHeight: '34px',
                   letterSpacing: '1px',
                   padding:"50px 0px"
               }}>
                   OUR PRODUCT RANGE
               </Box>
               <Grid container={"xl"} spacing={5}>
                   {data.map((item, index) => (
                       <Grid item xs={12} md={3}>
                           <Box
                               sx={{
                                   display: "flex",
                                   flexDirection: "column",
                                   alignItems: "center",
                                   textAlign: "center",
                                   transition: "transform 0.3s ease-in-out", // Smooth transition
                                   "&:hover": {
                                       transform: "scale(1.05)", // Slightly enlarge on hover
                                   }

                               }}
                           >
                               {/* Image Box */}
                               <Box
                                   sx={{
                                       width: "100%",
                                       maxWidth: "300px",
                                       // aspectRatio: "1 / 1",
                                       background: "#A4A4A3",
                                       boxShadow: "0px 4px 10px rgba(255,255,255,1)", // Apply shadow only to image
                                       // borderRadius: "8px",
                                       overflow: "hidden",
                                       padding: "10px",
                                       display: "flex",
                                       alignItems: "center",
                                       justifyContent: "center"
                                   }}
                               >
                                   <img
                                       src={item.image}
                                       alt="img"
                                       style={{ width: "100%", height: "100%", objectFit: "contain", }}
                                   />
                               </Box>

                               {/* Title */}
                               <Box
                                   sx={{
                                       marginTop: "10px",
                                       fontSize: "18px",
                                       fontWeight: "bold",
                                       color: "#333",
                                       textTransform: "uppercase"
                                   }}
                               >
                                   {item.title}
                               </Box>
                           </Box>
                       </Grid>

                   ))}
               </Grid>
           </Box>
       </Container>
    );
}

export default OurProduct;