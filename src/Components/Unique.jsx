import React, { useState } from "react";
import { Stack, Typography, IconButton, Tooltip, Box } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Unique({ userId }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const generateUniqueLink = (userId) => {
    return `https://falentine.netlify.app/main/user=${userId}`;
  };

  const uniqueLink = generateUniqueLink(userId);

  // const breakLongURL = (url) => {
  //   const maxLength = 40; // Set the maximum length for each line
  //   const parts = [];
  //   for (let i = 0; i < url.length; i += maxLength) {
  //     parts.push(url.substring(i, i + maxLength));
  //   }
  //   return parts.join("\n");
  // };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">
        <b>Your unique link is:</b>
      </Typography>

      <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>

        <Box>
          <Typography> {uniqueLink}</Typography>
        </Box>
        {!copied && (
          <CopyToClipboard text={uniqueLink} onCopy={handleCopy}>
            <IconButton>
              <ContentCopyIcon sx={{ color: "black" }} />
            </IconButton>
          </CopyToClipboard>
        )}
        {copied && (
          <Tooltip title="Link copied!" open={copied}>
            <IconButton disabled>
              <ContentCopyIcon sx={{ color: "black", opacity: 0.8 }} />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
}

export default Unique;
