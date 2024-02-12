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
    }, 1500);
  };
  const uniqueLink = localStorage.getItem("uniqueLink");
  return (
    <Stack spacing={2}>
      <Typography>Your unique link is:</Typography>
      <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
        <Typography>{uniqueLink}</Typography>
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
