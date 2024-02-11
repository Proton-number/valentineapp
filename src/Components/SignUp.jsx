import { Paper, Box, Stack, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../FirebaseConfig/firebase";
import { useNavigate } from "react-router-dom";

function SignUp({ setLogin }) {
  const navigate = useNavigate();
  const [uniqueLink, setUniqueLink] = useState("");

  const signUpHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        const user = res.user;
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userName", user.displayName);
        setLogin(true);
        // Generate unique link after successful login
        const encodedUserId = btoa(user.uid);
        const link = `http://localhost:5173/main/user=${encodedUserId}`;
        localStorage.setItem("uniqueLink", link);
        setUniqueLink(link);

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
