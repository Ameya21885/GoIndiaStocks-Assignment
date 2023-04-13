import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";

const AddMarketStories = () => {
  return (
    <div>
      <h1>Market Stories</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=2048x2048&w=is&k=20&c=nDNx4fzeZptAaYQqSO4Eqlu-j239MTCQMNlJGMfQTCg="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=2048x2048&w=is&k=20&c=nDNx4fzeZptAaYQqSO4Eqlu-j239MTCQMNlJGMfQTCg="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?s=2048x2048&w=is&k=20&c=nDNx4fzeZptAaYQqSO4Eqlu-j239MTCQMNlJGMfQTCg="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>


   <NavLink to='marketstories'>
   <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      
    </Box>
   </NavLink>

    </div>
  );
};

export default AddMarketStories;
