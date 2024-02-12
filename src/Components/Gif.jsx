import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function Gif({ sad, happy, gif }) {
  return (
    <Box>
      {gif && (
        <Box
          component="img"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTIydDIydGg2b25tb29xNG5vOHZxZm14ZG5kZjB6amdoZjRkd2xnZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KztT2c4u8mYYUiMKdJ/giphy.gif"
          sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
        />
      )}

      {happy && (
        <Box
          component="img"
          src="https://media.giphy.com/media/3q3ITkump6dZJt6C03/giphy.gif"
          sx={{ width: { xs: "200px", sm:"300px" ,lg: "400px" }, height: "auto" }}
        />
      )}
      {sad && (
        <Box
          component="img"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTA4OXh1NTYzcnQycnB2cmw3MmVqdms0dXVhYmFrZmwzcTVyYjR5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxfd9h4zALTO4G1W/giphy.gif"
          sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
        />
      )}
    </Box>
  );
}

export default Gif;
