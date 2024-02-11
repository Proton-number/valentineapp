import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import emailjs from "@emailjs/browser";
import Gif from "./Gif";

function Main({ login }) {
  const [copied, setCopied] = useState(false);
  const { userId } = useParams();
  const userEmail = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const sendEmail = (response) => {
    const message = `Your lover clicked: ${response === "Yes" ? "Yes" : "No"}`;
    emailjs
      .send(
        "service_4yekg28",
        "template_b84gc6f",
        {
          to_name: userName,
          from_name: "the Love Of Your Life",
          to_email: userEmail,
          message: message,
        },
        "t109mLgRKENh6e3Ch"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  const uniqueLink = localStorage.getItem("uniqueLink");
  return (
    <Box>
      <Stack spacing={2}>
        <Gif />
        <Typography variant="h2">Will you be my Valentine?</Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
          }}
          spacing={2}
        >
          <Button
            sx={{
              backgroundColor: "hsl(145, 54%, 48%)",
              "&:hover": {
                backgroundColor: "hsl(148, 100%, 26%)",
              },
            }}
            variant="contained"
            onClick={() => sendEmail("Yes")}
          >
            Yes
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => sendEmail("No")}
          >
            {" "}
            No
          </Button>
        </Stack>

        <Typography variant="body1" sx={{ cursor: "pointer" }}>
          <b>Unique Link:</b>{" "}
          {login ? (
            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Typography>{uniqueLink}</Typography>
              {!copied && (
                <CopyToClipboard text={uniqueLink} onCopy={handleCopy}>
                  <IconButton>
                    <ContentCopyIcon sx={{ color: "white" }} />
                  </IconButton>
                </CopyToClipboard>
              )}
              {copied && (
                <Tooltip title="Link copied!" open={copied}>
                  <IconButton disabled>
                    <ContentCopyIcon sx={{ color: "white", opacity: 0.8 }} />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          ) : (
            <Link to="/">
              <Box sx={{ color: "white" }}>Click here to get your link</Box>
            </Link>
          )}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Main;
