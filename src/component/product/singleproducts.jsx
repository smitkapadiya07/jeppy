import React, {useState} from 'react';
import {Box, Chip, Container, Typography, Slider, LinearProgress, Grid, CircularProgress, Divider} from '@mui/material';
import img1 from '../../assets/image/singleproducts/singleProducts1.jpg';
import beforeImg from '../../assets/image/singleproducts/singleProducts1.jpg';
import afterImg from '../../assets/image/singleproducts/s2.jpg';

function Singleproducts() {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const data = [
        {label: "Nutritional Content: Protein", value: 90, highLow: "HIGH"},
        {label: "Fat Content", value: 10, highLow: "LOW"}
    ];


    return (
        <Box>
            <Box
                sx={{
                    height: {xs: '60vh', md: '100vh'},
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: {xs: '28px', sm: '36px', md: '48px', lg: '64px', xl: '72px'},
                            fontWeight: 500,
                            maxWidth: {xs: '90%', md: '65%'},
                            lineHeight: 1.2,
                            padding: {xs: '0 1rem', md: '0'},
                        }}
                    >
                        Soy Micropellet with poppy seeds
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: 'space-between',
                        padding: {xs: '20px', md: '50px'},
                        gap: 5,
                    }}
                >
                    <Box
                        sx={{
                            fontSize: {xs: '24px', sm: '32px', md: '40px', lg: '52px'},
                            width: {xs: '100%', md: '50%'},
                            color: '#0033CC',
                            lineHeight: 1,
                            textAlign: {xs: 'center', md: 'left'},
                        }}
                    >
                        Soy-based micropellet with added poppy seeds, suitable for compression popping technology.
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            padding: {xs: '1rem', md: '2rem'},
                            width: {xs: '100%', md: '50%'},
                        }}
                    >
                        <Box
                            sx={{
                                borderBottom: '1px solid grey',
                                paddingBottom: '1rem',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '16px',
                                    margin: '0 0 16px',
                                    color: '#161519',
                                    textAlign: {xs: 'center', md: 'left'},
                                }}
                            >
                                MAIN INGREDIENT
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                }}
                            >
                                <Chip
                                    label="Poppy Seeds"
                                    variant="outlined"
                                    sx={{
                                        padding: '4px 20px',
                                        fontSize: '16px',
                                        color: '#161519',
                                    }}
                                />
                                <Chip
                                    label="Soy"
                                    variant="outlined"
                                    sx={{
                                        padding: '4px 20px',
                                        fontSize: '16px',
                                        color: '#161519',
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                borderBottom: '1px solid grey',
                                paddingBottom: '1rem',
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: '16px',
                                    margin: '0 0 16px',
                                    color: '#161519',
                                    textAlign: {xs: 'center', md: 'left'},
                                }}
                            >
                                SHAPES
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                }}
                            >
                                <Chip
                                    label="Micropellet"
                                    variant="outlined"
                                    sx={{
                                        padding: '4px 20px',
                                        fontSize: '16px',
                                        color: '#161519',
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <Box
                                sx={{
                                    fontSize: '16px',
                                    margin: '0 0 16px',
                                    color: '#161519',
                                    textAlign: {xs: 'center', md: 'left'},
                                }}
                            >
                                EXPANSION PROCESS
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                }}
                            >
                                <Chip
                                    label="Compression popping"
                                    variant="outlined"
                                    sx={{
                                        padding: '4px 20px',
                                        fontSize: '16px',
                                        color: '#161519',
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{textAlign: 'center', padding: {xs: '20px 0', md: '40px 0'}}}>
                    <Box
                        sx={{
                            fontSize: {xs: '24px', md: '36px'},
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
                            height: {xs: '300px', sm: '450px', md: '600px'},
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${afterImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                width: '100%',
                                position: 'absolute',
                            }}
                        />
                        <Box
                            sx={{
                                backgroundImage: `url(${beforeImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                width: '100%',
                                position: 'absolute',
                                clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
                                transition: 'clip-path 0.3s ease-in-out',
                            }}
                        />
                        <Slider
                            value={sliderValue}
                            onChange={handleSliderChange}
                            sx={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: {xs: '80%', md: '60%'},
                                color: '#1436c5',
                            }}
                        />
                    </Box>
                </Box>

            </Container>

            <Box
                sx={{
                    backgroundColor: "#0f1a2b",
                    padding: "6rem 0",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        color: "white",
                        margin: "0 auto",
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#fff",
                                    fontSize: "18px",
                                    textTransform: 'uppercase',
                                    fontWeight: "500",

                                }}
                            >
                                TECHNICAL INFOS
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    margin: "10px 0 0",
                                    padding: "4px 0 0",
                                    width: "90%",
                                    fontSize: "28px",
                                    color: "#fff",
                                    fontWeight: "400",
                                    lineHeight: "1.2",
                                }}
                            >
                                Each of our shapes is unique and comes from processes designed
                                to offer the best possible quality. Discover the features of our
                                products.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {data.map((item, index) => (
                                <Box key={index} mb={3}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        margin: "0 0 10px"
                                    }}>
                                        <Box
                                            sx={{
                                                color: "#fff",
                                                fontSize: "1em",
                                                fontWeight: "bold",
                                                textTransform: 'uppercase',
                                                lineHeight: "1.35",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {item.label}
                                        </Box>
                                        <Box
                                            sx={{
                                                color: "#fff",
                                                fontSize: "0.875rem",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.highLow}
                                        </Box>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <input
                                            type="range"
                                            value={item.value}
                                            readOnly
                                            style={{
                                                flex: 1,
                                                height: "8px",
                                                appearance: "none",
                                                backgroundColor: "grey",
                                                marginRight: "0.5rem",
                                                borderRadius: "5px",
                                                outline: "none",
                                                cursor: "pointer",
                                                WebkitAppearance: "none",
                                            }}
                                        />

                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
}

export default Singleproducts;

