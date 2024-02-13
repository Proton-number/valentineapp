import { useState } from 'react';
import { Stack, Typography, IconButton, Tooltip, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { breakLongURL } from '../../lib/utils';

const CopyLink = ({ userId }) => {
  const [copied, setCopied] = useState(false);
  const domain = window?.location?.origin;
  const uniqueLink = `${domain}/main/user=${userId}`;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Stack spacing={2}>
      <Typography variant='h6'>
        <b>Your unique link is:</b>
      </Typography>

      <Stack direction='row' spacing={1.2} sx={{ alignItems: 'center' }}>
        <Box>
          <Typography> {breakLongURL(uniqueLink)}</Typography>
        </Box>
        {!copied && (
          <CopyToClipboard text={uniqueLink} onCopy={handleCopy}>
            <IconButton>
              <ContentCopyIcon sx={{ color: 'black' }} />
            </IconButton>
          </CopyToClipboard>
        )}
        {copied && (
          <Tooltip title='Link copied!' open={copied}>
            <IconButton disabled>
              <ContentCopyIcon sx={{ color: 'black', opacity: 0.8 }} />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
};

export default CopyLink;
