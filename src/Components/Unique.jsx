import React, { useState } from "react";
import { Stack, Typography, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Unique() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Hide success message after 3 seconds
  };
  const uniqueLink = "https://www.example.com/your-unique-link";
  return (
    <Stack spacing={2}>
      <Typography>Your unique link is:</Typography>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
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
    </Stack>
  );
}

export default Unique;
