import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Main({ login }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  const uniqueLink = "https://www.example.com/your-unique-link1";
  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="h2">Will you be my Valentine?</Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
          }}
          spacing={2}
        >
          <Button variant="contained">Yes</Button>
          <Button variant="contained"> No</Button>
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
