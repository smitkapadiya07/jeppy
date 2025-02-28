import React, {useState} from "react";
import {
    Container,
    Grid,
    Box,
    Dialog,
    IconButton,
    Typography,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button
} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/image/product/ABCD.png";

const product = {
    name: "ABCD",
    code: "113",
    title: "Product Parameters",
    images: [img1, img1, img1],
    parameters: [
        {label: "Moisture (%)", value: "8.5-9.5"},
        {label: "Products Pcs in 10g", value: "38"},
        {label: "Bulk Density (Before Fry)", value: "544 Gm/Ltr"},
        {label: "Bulk Density (After Fry)", value: "54 Gm/Ltr"},
        {label: "Salt (%)", value: "2.5-3.0"},
        {label: "Frying Temperature", value: "185℃ to 190℃"},
        {label: "Frying Time", value: "15-17 Seconds"}
    ]
};

const SingleProduct = () => {
    const [open, setOpen] = useState(false);

    console.log(open , "45464555");

    return (
        <Box sx={{padding: "100px 0"}}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Product Image Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: "relative",
                                cursor: "pointer",
                                backgroundColor:"#AFAEAC",
                            }}
                            onClick={() => setOpen(true)} // Open fullscreen on click
                        >
                            <Swiper
                                style={{width: "100%"}}
                                modules={[Navigation, Thumbs]}
                                loop={true}
                                navigation={{
                                    nextEl: ".navigationNextRef",
                                    prevEl: ".navigationPrevRef"
                                }}
                            >
                                {product.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={product.name} style={{width: "100%" , filter: "drop-shadow(0px 20px 15px rgba(229, 226, 221, 1))"}}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid>

                    {/* Product Details Section */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{
                            fontSize: "20px",
                            fontWeight: "600",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            lineHeight: "23px",

                        }}>{product.name}</Typography>
                        <Typography variant="subtitle1" sx={{
                            fontSize: "13px",
                            lineHeight: "23px",
                            color: "#626262",

                        }}>Product Code: {product.code}</Typography>
                        <Typography variant="subtitle1" sx={{
                            fontSize: "18px",
                            color: "#373737",
                            padding: "20px 0 0",
                            lineHeight: "23px",
                            letterSpacing: ".02px",
                        }}> {product.title}</Typography>
                        <Table sx={{ mt: 2, }}>
                            <TableBody>
                                {product.parameters.map((param, index) => (
                                    <TableRow key={index} >
                                        <TableCell sx={{ fontSize: "13px", padding: "8px", color: "#626262", fontWeight: "400", lineHeight: "23px", borderBottom: "1px solid #ddd" , width:"70%" }}>
                                            {param.label}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: "13px", padding: "8px", color: "#333", fontWeight: "500", lineHeight: "23px", borderBottom: "1px solid #ddd" }}>
                                            {param.value}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <Button variant="contained" fullWidth sx={{mt: 2 ,backgroundColor: "#02154E",
                            color: "#fff",
                            fontSize: "11px",
                            padding: "6px 14px",
                            letterSpacing: "1px",
                            fontWeight: 600,
                            border: "2px solid transparent",
                            "&:hover": {
                                color: "#02154E",
                                border: "2px solid #02154E",
                                backgroundColor: "white",
                            }, }}>
                            ADD TO INQUIRY CART
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* Full-Screen Swiper Modal */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullScreen
                sx={{bgcolor: "#fff"}} // White background
            >
                <Box sx={{
                    position: "relative",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "#fff",
                            border: "1px solid #000",
                            backgroundColor: "#000",
                            zIndex: 999,
                            borderRadius: 0,
                            "&:hover": {
                                backgroundColor: "#000",
                            }
                        }}
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>

                    <Swiper
                        style={{width: "100%", height: "100%"}}
                        modules={[Navigation, Thumbs]}
                        loop={true}
                        navigation
                    >
                        {product.images.map((item, index) => (
                            <SwiperSlide key={index}
                                         style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Box sx={{
                                    height: "750px",
                                    width: "650px",
                                }}>
                                    <img src={item} alt="Product"
                                         style={{width: "100%", height: "100%", objectFit: "contain"}}/>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Dialog>
        </Box>
    );
};

export default SingleProduct;
