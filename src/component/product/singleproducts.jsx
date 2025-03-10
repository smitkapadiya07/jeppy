import React, {useEffect, useState} from 'react';
import {
    Box,
    Chip,
    Container,
    Typography,
    Slider,
    LinearProgress,
    Grid,
    Divider,
    Button, Popover, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, TextField
} from '@mui/material';
import axios from "axios";
import { CircularProgress } from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import log from "eslint-plugin-react/lib/util/log.js";

function Singleproducts() {
    const {id} = useParams();
    const [sliderValue, setSliderValue] = useState(50);
    const [products, setProducts] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [anchorEl, setAnchorEl] = useState(null);

    // Open Popover
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const inquirySubmit = (data) => {

        const payload = {
            product_id: id,
            name: data.name,
            productMessage: data.productMessage,
            email: data.email,
            contact: data.contact,
            subject: data.subject,
            message: data.message,
        };


        axios.post(`https://valin-backend.onrender.com/api/inquiry`, payload)
            .then(response => console.log(response.data))
        .catch(error => console.log(error));

        handleClose();
    }

    // Close Popover
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Form Submit
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Inquiry Submitted Successfully!");
        handleClose(); // Popover Close after submit
    };

    useEffect(() => {
        setLoading(true);
        axios.get(`https://valin-backend.onrender.com/api/product/${id}`)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log('API Error:', err);
                setLoading(false);
            });
    }, []);


    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
        if (isDragging) {
            const {left, width} = e.currentTarget.getBoundingClientRect();
            const newSliderValue = Math.min(100, Math.max(0, ((e.clientX - left) / width) * 100));
            setSliderValue(newSliderValue);
        }
    };

    return (
        <Box>
            {loading ? (
                <Box sx={{ textAlign: "center", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            height: {xs: '60vh', md: '100vh'},
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${products.product_image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                position: 'relative',
                                padding: '2rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: {xs: '28px', sm: '36px', md: '48px', lg: '64px', xl: '72px'},
                                    fontWeight: 'bold',
                                    width: {xs: '90%', md: '55%'},
                                    lineHeight: 1.2,
                                    padding: {xs: '0 1rem', md: '0'},
                                }}
                            >
                                {products.product_name}
                            </Typography>
                            <Box sx={{ textAlign: "center", mt: 4 }}>
                                {/* Button to Open Popover */}
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}
                                    onClick={handleOpen} // 👈 Popover Open
                                >
                                    ADD TO INQUIRY CART
                                </Button>

                                {/* Popover Component */}
                                <Popover
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                                >
                                    {/* Inquiry Form Inside Popover */}
                                    <Box sx={{
                                        width: "80vw", // 👈 Width badharyu
                                        maxWidth: "600px",
                                        p: 3,
                                        backgroundColor: "#fff",
                                        mt: 2
                                    }}>
                                        {/* Product Table */}
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow sx={{ backgroundColor: "#ece9e4" }}>
                                                        <TableCell sx={{ fontWeight: "bold" }}>PRODUCT</TableCell>
                                                        <TableCell sx={{ fontWeight: "bold" }}>MESSAGE</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{
                                                            height:"140px",
                                                            width:"190px",
                                                            objectFit:"cover",
                                                            backgroundRepeat:"no-repeat",
                                                        }}>
                                                            <img src={products.product_image} alt="" style={{ width:"100%",height:"100%" }} />
                                                            {products.product_name}
                                                        </TableCell>
                                                        <TableCell>
                                                            <TextField
                                                                variant="standard"
                                                                fullWidth
                                                                {...register("productMessage",  "productMessage")}
                                                            />
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* Inquiry Form */}
                                        <Box component="form" onSubmit={handleSubmit(inquirySubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                                            <TextField
                                                label="Name *"
                                                variant="standard"
                                                fullWidth
                                                {...register("name", { required: "Name is required" })}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}
                                            />

                                            <TextField
                                                label="Email *"
                                                variant="standard"
                                                fullWidth
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" }
                                                })}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                            />

                                            <TextField
                                                label="Phone *"
                                                variant="standard"
                                                fullWidth
                                                {...register("contact", { required: "Phone number is required" })}
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}
                                            />

                                            <TextField
                                                label="Subject *"
                                                variant="standard"
                                                fullWidth
                                                {...register("subject", { required: "Subject is required" })}
                                                error={!!errors.subject}
                                                helperText={errors.subject?.message}
                                            />

                                            <TextField
                                                label="Message *"
                                                variant="standard"
                                                fullWidth
                                                multiline
                                                rows={3}
                                                {...register("message", { required: "Message is required" })}
                                                error={!!errors.message}
                                                helperText={errors.message?.message}
                                            />

                                            <Button type="submit" variant="contained" sx={{ backgroundColor: "#001444", color: "white", mt: 2 }}>
                                                SUBMIT ENQUIRY
                                            </Button>
                                        </Box>
                                    </Box>
                                </Popover>
                            </Box>
                        </Box>

                    </Box>

                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                padding: {xs: '20px', md: '50px'},
                                gap: {xs: 3, md: 5},
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: {xs: '20px', sm: '28px', md: '36px', lg: '48px'},
                                    width: {xs: '100%', md: '45%'},
                                    color: '#0033CC',
                                    lineHeight: 1.2,
                                    textAlign: {xs: 'center', md: 'left'},
                                    padding: {xs: '10px', md: '0'},
                                }}
                            >
                                {products.product_title}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: {xs: 2, md: 3},
                                    padding: {xs: '1rem', md: '2rem'},
                                    width: {xs: '100%', md: '50%'},
                                }}
                            >
                                {['MAIN INGREDIENT', 'SHAPES', 'EXPANSION PROCESS'].map((title, idx) => {
                                    const dataKey = title.toLowerCase().replace(/ /g, '_');
                                    const data = products?.[dataKey] || [];

                                    return (
                                        <Box
                                            key={title}
                                            sx={{
                                                borderBottom: '1px solid #F1F3F5',
                                                paddingBottom: '1rem',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    fontSize: '16px',
                                                    margin: '0 0 16px',
                                                    color: '#161519',
                                                    textAlign: {xs: 'center', md: 'left'},
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 2,
                                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                                }}
                                            >
                                                {data.length > 0 ? (
                                                    data.map((item, index) => (
                                                        <Chip
                                                            key={index}
                                                            label={item || 'N/A'}
                                                            variant="outlined"
                                                            sx={{
                                                                padding: '4px 20px',
                                                                fontSize: '14px',
                                                                color: '#161519',
                                                                borderColor: '#161519',
                                                            }}
                                                        />
                                                    ))
                                                ) : (
                                                    <Chip
                                                        label="N/A"
                                                        variant="outlined"
                                                        sx={{
                                                            padding: '4px 20px',
                                                            fontSize: '14px',
                                                            color: '#161519',
                                                            borderColor: '#161519',
                                                        }}
                                                    />
                                                )}
                                            </Box>
                                        </Box>
                                    );
                                })}

                            </Box>
                        </Box>


                        <Box sx={{textAlign: 'center', padding: {xs: '20px 0', md: '40px 0'}}}>
                            <Box
                                sx={{
                                    fontSize: {xs: '20px', md: '36px'},
                                    color: '#1436c5',
                                    textAlign: 'center',
                                }}
                            >
                                Before and after cooking
                            </Box>

                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    margin: '20px auto',
                                    height: {xs: '250px', sm: '400px', md: '600px'},
                                    overflow: 'hidden',
                                    cursor: isDragging ? 'grabbing' : 'pointer',
                                    '&:hover .dark-overlay': {opacity: 0.2},
                                    '&:hover .label': {opacity: 1},
                                }}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <Box
                                    className="dark-overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#000',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease-in-out',
                                        zIndex: 2,
                                    }}
                                />

                                <Box
                                    sx={{
                                        backgroundImage: `url(${products.cooking_after_image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        zIndex: 2,
                                    }}
                                />

                                <Box
                                    sx={{
                                        backgroundImage: `url(${products.cooking_before_image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                                        transition: isDragging ? 'none' : 'clip-path 0.3s ease-in-out',
                                        zIndex: 2,
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: `${sliderValue}%`,
                                        transform: 'translateX(-50%)',
                                        width: '2px',
                                        backgroundColor: '#fff',
                                        zIndex: 4,
                                        transition: isDragging ? 'none' : 'left 0.3s ease-in-out',
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: `${sliderValue}%`,
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: '#fff',
                                        borderRadius: '50%',
                                        padding: '15px 5px',
                                        boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                                        zIndex: 5,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'grab',
                                    }}
                                    onMouseDown={handleMouseDown}
                                >
                                    <ChevronLeft/>
                                    <ChevronRight/>
                                </Box>

                                {['After', 'Before'].map((label, idx) => (
                                    <Box
                                        key={label}
                                        className="label"
                                        sx={{
                                            position: 'absolute',
                                            [idx === 0 ? 'right' : 'left']: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%) rotate(-90deg)',
                                            backgroundColor: '#000',
                                            color: '#fff',
                                            padding: '10px 15px',
                                            borderRadius: '0 10px 0 10px',
                                            opacity: 0,
                                            transition: 'opacity 0.3s',
                                            zIndex: 3,
                                        }}
                                    >
                                        {label}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Container>


                    <Box sx={{backgroundColor: '#0f1a2b', py: 18, color: 'white'}}>
                        <Container maxWidth="lg">
                            <Typography variant="h6" sx={{textTransform: 'uppercase', fontWeight: 600}}>
                                Technical Infos
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{
                                        fontSize: "28px",
                                        color: '#fff',
                                        margin: "10px 0 0",
                                        padding: "4.2px 0 0",
                                        fontWeight: "400",
                                        letterSpacing: "-0.03em",
                                        lineHeight: "1.2"
                                    }}>
                                        Each of our shapes is unique and comes from processes designed to offer the best
                                        possible quality. Discover the features of our products.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    {products.technical_infos?.map((info, index) => (
                                        <Box key={index} sx={{mb: 3}}>
                                            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
                                                <Typography
                                                    sx={{textTransform: 'uppercase', fontSize: '14px', color: '#fff'}}>
                                                    {info.name}
                                                </Typography>
                                                <Typography sx={{fontSize: '14px', color: '#fff'}}>
                                                    {info.value >= 70 ? 'HIGH' : info.value >= 40 ? 'CRUNCHY' : 'LOW'}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    height: '6px',
                                                    borderRadius: '5px',
                                                    backgroundColor: '#2d3b4e',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        height: '100%',
                                                        borderRadius: '5px',
                                                        backgroundColor: '#fff',
                                                        width: `${info.value}%`,
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    ))}
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </>

            )}
        </Box>
    );
}

export default Singleproducts;

