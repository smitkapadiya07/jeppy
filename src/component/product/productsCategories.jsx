import React, {useEffect, useState} from 'react';
import {Autocomplete, Box, Container, Divider, Grid, TextField} from "@mui/material";
import abcd from '../../assets/image/product/ABCD.png'
import {useNavigate} from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";

function ProductsCategories() {

    const [categories, setCategories] = useState([]);
    const [mainIngredients, setMainIngredients] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [expansionProcesses, setExpansionProcesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [filteredCategories, setFilteredCategories] = useState([]);

    const [selectedMainIngredient, setSelectedMainIngredient] = useState(null);
    const [selectedShape, setSelectedShape] = useState(null);
    const [selectedExpansionProcess, setSelectedExpansionProcess] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://valin-backend.onrender.com/api/product');
                const products = response.data;
                setCategories(products);
                setFilteredCategories(products);

                const uniqueMainIngredients = [...new Set(products.flatMap(product => product.main_ingredient))];
                const uniqueShapes = [...new Set(products.flatMap(product => product.shapes))];
                const uniqueExpansionProcesses = [...new Set(products.flatMap(product => product.expansion_process))];

                setMainIngredients(uniqueMainIngredients.map(item => ({ label: item })));
                setShapes(uniqueShapes.map(item => ({ label: item })));
                setExpansionProcesses(uniqueExpansionProcesses.map(item => ({ label: item })));
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const filterProducts = (ingredient, shape, expansionProcess) => {
        let filtered = categories;

        if (ingredient) {
            filtered = filtered.filter(product =>
                product.main_ingredient.includes(ingredient.label)
            );
        }

        if (shape) {
            filtered = filtered.filter(product =>
                product.shapes.includes(shape.label)
            );
        }

        if (expansionProcess) {
            filtered = filtered.filter(product =>
                product.expansion_process.includes(expansionProcess.label)
            );
        }

        setFilteredCategories(filtered);
    };

    const handleMainIngredientChange = (event, value) => {
        setSelectedMainIngredient(value);
        filterProducts(value, selectedShape);
    };

    const handleShapeChange = (event, value) => {
        setSelectedShape(value);
        filterProducts(selectedMainIngredient, value);
    };

    const handleExpansionProcessChange = (event, value) => {
        setSelectedExpansionProcess(value);
        filterProducts(selectedMainIngredient, selectedShape, value);
    };


    return (
        <Box sx={{
            padding: "120px 0 20px 0"
        }}>
            <Container maxWidth={"xl"}>
                <Box sx={{
                    padding: "0 15px"
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={6}>
                        </Grid>

                        <Grid item xs={12} sm={12} md={8} lg={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: {
                                        xs: "center",
                                        sm: "flex-start",
                                    },
                                    gap: 2,
                                    padding: 1,
                                }}
                            >
                                <Autocomplete
                                    disablePortal
                                    options={mainIngredients}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 200 }}
                                    onChange={handleMainIngredientChange}
                                    renderInput={(params) => <TextField {...params} label="Main Ingredient" />}
                                />

                                <Autocomplete
                                    disablePortal
                                    options={shapes}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 200 }}
                                    onChange={handleShapeChange}
                                    renderInput={(params) => <TextField {...params} label="Shape" />}
                                />


                                <Autocomplete
                                    disablePortal
                                    options={expansionProcesses}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 200 }}
                                    onChange={handleExpansionProcessChange}
                                    renderInput={(params) => <TextField {...params} label="Expansion Process" />}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {loading ? (
                        <Box sx={{ textAlign: "center", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        filteredCategories.length > 0 ? (
                            <Grid item xs={12} sm={6} md={9}>
                                <Grid container spacing={2}>
                                    {filteredCategories.map((item, index) => (
                                        <Grid item xs={12} md={6} lg={4} key={index}>
                                            <Box
                                                sx={{
                                                    margin: { xs: "15px 0", md: "25px 0 0" },
                                                    cursor: "pointer",
                                                    padding: { xs: "10px", md: "0" },
                                                }}
                                                onClick={() => navigate(`/products/${item._id}`)}
                                            >
                                                <Box
                                                    sx={{
                                                        cursor: "pointer",
                                                        backgroundColor: "#A1A0A1",
                                                        height: { xs: "300px", sm: "400px", md: "513px" },
                                                        width: "100%",
                                                    }}
                                                >
                                                    <img
                                                        src={item.product_image || abcd}
                                                        alt="category"
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            filter: "drop-shadow(0px 20px 15px rgba(229, 226, 221, 1))",
                                                        }}
                                                    />
                                                </Box>

                                                <Box
                                                    sx={{
                                                        color: "#111013",
                                                        fontSize: { xs: "12px", md: "22px" },
                                                        textTransform: "uppercase",
                                                        textAlign: "center",
                                                        marginTop: "15px",
                                                        lineHeight: "1.2",
                                                        fontWeight: "bold"
                                                    }}
                                                >
                                                    {item.product_name}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        ) : (
                            <Box sx={{ textAlign: "center", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px" }}>
                                <p>No data available</p>
                            </Box>
                        )
                    )}

                </Box>
            </Container>
        </Box>
    );
}
export default ProductsCategories;