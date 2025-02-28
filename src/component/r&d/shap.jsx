import React from 'react';
import {Box, Container, Typography} from '@mui/material';

const shapeData = [
    {
        title: "2D Shape (Die face cut)",
        description: "2D Shapes have only 2 Dimensions and they are flat. Some of our 2D shapes products are as under:",
        items: [
            "ABCD", "Animals", "Buttons (Wheels)", "Bacon Chips (Cereal Strip)", "Mini Ring",
            "Crab", "Mad Stick", "Moon Chips", "Penne", "Tulip", "Snake and Ladder",
            "Square Tube", "Rugby Ball and more ..."
        ]
    },
    {
        title: "3D Shape (Perforated and Double Layered)",
        description: "Next dimension of shape is Third Dimension Shapes also known as 3D Shapes or Solids. 3D Shapes, they are structured as both Curved Shapes, Solid, and the Straight-Sided Polygon also called a Polyhedron. Some of our 3D Shapes products are as under:",
        items: [
            "Triangle", "Cone", "Fish", "Fan", "Racket", "Heart", "Hexagonal", "Oval", "Star and more ..."
        ]
    },
    {
        title: "Sheeted (Laminated) Shape",
        description: "Coming to the other level of shapes, which is Flat or Sheeted Shape.",
        items: [
            "Round", "Triangle", "Hexagonal", "Oval", "Square", "Long Square"
        ]
    }
];

function Shape() {
    return (
        <Box className={"OpenSans"} sx={{
            backgroundColor: '#FFFFF9',
            padding: '100px 0px',
        }}>
            <Container maxWidth={"lg"}>
                <Box sx={{ padding: 4 }}>
                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                        Jeppy offers Papad Products in various different shapes that will suit the mouth size of children as well as adults.
                        First of all, before we dive into the shapes, let’s see the basics of its source, which is called Geometry, where we have taken our inspiration, considering customized requests and present market trends.
                        We have covered these geometry shapes like squares, circles, hexagonal, triangles, etc., in our products. We have bifurcated our products in the following shapes, namely:
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {shapeData.map((shape, index) => (
                            <Box key={index} sx={{ width: { xs: '100%', md: '30%' } }}>
                                <Box sx={{
                                    paddingBottom:"25px",
                                }}>
                                    <Typography variant="h7" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                        {shape.title}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                                    {shape.description}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: '40px',
                                    paddingTop: '15px',
                                    paddingBottom: '10px',
                                    lineHeight: '25px',
                                }}>
                                    <ul>
                                        {shape.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Shape;
