import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from "axios";

function Homeinsight() {
    const navigate = useNavigate();
    const [insight, setInsight] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://valin-backend.onrender.com/api/insight")
            .then((response) => {
                if (response.data.length > 0) {
                    setInsight(response.data[0]);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Container maxWidth="lg">
                {loading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error">Failed to load insights. Please try again later.</Typography>
                ) : insight ? (
                    <Link to={"/singleinsight"} style={{ textDecoration: 'none' }}>
                        <Box sx={{ borderBottom: '1px solid #B6BECC' }}>
                            <Typography sx={{
                                padding: '36px 0',
                                marginBottom: '50px',
                                color: '#CBC2CC',
                            }}>Home | Insight</Typography>
                        </Box>
                        <Box sx={{
                            borderBottom: '1px solid #B6BECC',
                            padding: '16.36px 0',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: "31px 0"
                            }}>
                                <Box sx={{ fontSize: '14px' }}>
                                    {new Date(insight.date).toLocaleDateString('en-GB', {
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric'
                                    })}
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexGrow: 1,
                                    marginLeft: 2,
                                    marginRight: 2
                                }}>
                                    <Box sx={{ padding: '0px 15.64px', fontSize: '24px' }}>
                                        {insight.title || "Micropellets: the answer to the dilemma “healthy or tasty?”"}
                                    </Box>
                                </Box>
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <Button onClick={() => navigate('/singleinsight')}>
                                        Read More <ChevronRightIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                ) : (
                    <Typography>No insights available.</Typography>
                )}
            </Container>
        </>
    );
}

export default Homeinsight;