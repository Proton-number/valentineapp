import { Paper, Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../FirebaseConfig/firebase";
import { useNavigate } from "react-router-dom";

function SignUp({ setLogin }) {
  const navigate = useNavigate();

  const signUpHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        localStorage.setItem("loggedIn", true);
        setLogin(true);
        navigate("/unique");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Paper sx={{ padding: "30px" }}>
        <Button variant="contained" onClick={signUpHandler}>
          Login with Google
        </Button>
      </Paper>
    </Box>
  );
}

export default SignUp;
