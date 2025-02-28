import React from 'react';
import {Box, Container, Typography} from '@mui/material';

const ingredientsData = [
    "Ingredients means a way of turning anything in by entering into its compound or in a part of its component of any mixture or combination.",
    "Ingredients is the soul of any product. It must be perfect in manner to provide the perfect taste and health. JEPPY is responsible to bring out the best from the ingredients and to make it and serve it in such a way that the product becomes a class a part.",
    "The reason to use the Quality Ingredients is that to never compromise with the Health and Taste. That is the reason to collect these ingredients in its Fresh and Natural form to bring something splendid taste of products.",
    "All Purpose Cereal, Lentils, Pulse, Multi grain flour, Vegetable powder, Starches, and micro ingredients like as Salt, Pepper, Vegetable oil are the basic ingredients required in product’s formulation.",
    "Jeppy’s Ingredients always stand for the widely range of Papad Snacks to create a TASTIEST SNACKING Experience.",
    "Water is the second largest key ingredient in the formulation therefore we maintain the best water quality. E.g. RO water."
];

function Ingredients() {
    return (
       <Box sx={{
           backgroundColor: '#FFFFF9',
       }}>
       <Container maxWidth={"lg"}>
           <Box className={"OpenSans"} sx={{ padding: 4 }}>
               {ingredientsData.map((text, index) => (
                   <Typography key={index} variant="body1" sx={{ marginBottom: 3 , fontSize: "13px" }}>
                       {text}
                   </Typography>
               ))}
           </Box>
       </Container>
       </Box>
    );
}

export default Ingredients;
