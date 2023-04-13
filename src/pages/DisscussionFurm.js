import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";
import AddMarketStories from "../components/AddMarketStories";
import "./disscusion.css";

const DisscussionFurm = () => {

  const [data, setData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: "No Data Available" }]);
      }
    }
    setFilterVal(e.target.value);
  };

  return (
    <div style={{ display: "flex" }} className="ab">
      {/* 1 */}
      <div style={{ width: "60%" }} className="a">
        <h1>Filters</h1>
        <Box
          style={{ width: "80%", margin: "0px auto 0px auto" }}
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Search"
            id="fullWidth"
            value={filterVal}
            onInput={(e) => handleFilter(e)}
          />
        </Box>

        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={6} key={item.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name} {item.id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Tooltip title="Add">
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip>
                        <IconButton>
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <IconButton>
                        <ChatBubbleOutlineIcon />
                      </IconButton>
                      <IconButton>
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ flexGrow: 1 }}></Box>
        </Box>
      </div>

      {/* 2 */}
      <div style={{ width: "40%" }} className="b">
        <AddMarketStories />
      </div>
    </div>
  );
};

export default DisscussionFurm;
