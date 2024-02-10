import { Paper, Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../FirebaseConfig/firebase";

function SignUp() {
  return (
    <Box>
      <Paper sx={{padding:"30px"}}>
        <Button variant="contained">Login with Google</Button>
      </Paper>
    </Box>
  );
}

export default SignUp;
