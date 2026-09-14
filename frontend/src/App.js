import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Medtachy
          </Typography>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
