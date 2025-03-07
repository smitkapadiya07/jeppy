import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";
import img from '../../assets/image/header/Cover_listing_desk.jpg'
import Header from "../global/header.jsx";
import axios from "axios";

function Singleinsight(props) {

    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headerImage, setHeaderImage] = useState("");


    useEffect(() => {
        axios.get("https://valin-backend.onrender.com/api/insight")
            .then((response) => {
                setInsights(response.data);
                if (response.data.length > 0) {
                    setHeaderImage(response.data[0].image);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);


    const breadCrumbs = [
        // {label:'Home',route: '/'},
        // {label:'Insight',route: '/insight'},
    ]
    return (
        <>

            <Header bgImg={headerImage} description={'Micropellets: the answer to the dilemma “healthy or tasty?”'}
                    breadcrumbs={breadCrumbs}/>
            <Container maxWidth={"lg"}>
                <Box sx={{
                    display: 'flex',
                    padding: '36px 0px',
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#C6CDD6',
                }}>
                    <Box>Home|</Box>
                    <Box>Insight|</Box>
                    <Box>Micropellets: the answer to the dilemma “healthy or tasty?”</Box>
                </Box>
                <Grid container>
                    {loading ? (
                        <Box display="flex" justifyContent="center" my={4}>
                            <CircularProgress />
                        </Box>
                    ) : error ? (
                        <Typography color="error">Failed to load insights. Please try again later.</Typography>
                    ) : (
                        <Grid container>
                            {insights.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Box sx={{ padding: '10px 0' }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                                            {item.answers}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
            </Container>
        </>
    );
}

export default Singleinsight;