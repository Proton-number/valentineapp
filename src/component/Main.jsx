import { useState } from 'react';
import {
  Box,
  Stack,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Gif from './ui/Gif';
import CopyLink from './ui/CopyLink';
import { useAuth } from '../contexts/AuthContext';
import emailjs from '@emailjs/browser';

function Main() {
  const { userId } = useParams();
  const { user, login } = useAuth();

  const [emotionalState, setEmotionalState] = useState({
    happy: false,
    sad: false,
    gif: true,
  });

  const { happy, sad, gif } = emotionalState;

  const font = createTheme({
    typography: {
      fontFamily: 'Dancing Script, cursive',
    },
  });

  const sendEmail = (response) => {
    const userEmail = user?.email;
    const userName = user?.name;
    const message = `Your lover clicked: ${response === 'Yes' ? 'Yes' : 'No'}`;

    emailjs
      .send(
        'service_ack0iqk',
        'template_7l59kvk',
        {
          to_name: userName,
          from_name: 'the Love Of Your Life',
          to_email: userEmail,
          message,
        },
        'ztBK844ely_XQ_9hh'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const handleButtonClick = (response) => {
    setEmotionalState({
      happy: response === 'Yes',
      sad: response === 'No',
      gif: false,
    });

    sendEmail(response);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Gif sad={sad} happy={happy} gif={gif} />
        <ThemeProvider theme={font}>
          <Typography variant='h2'>Will you be my Valentine?</Typography>
        </ThemeProvider>
        <Stack
          direction='row'
          sx={{
            justifyContent: 'center',
          }}
          spacing={2}
        >
          <Button
            sx={{
              backgroundColor: 'hsl(145, 54%, 48%)',
              '&:hover': {
                backgroundColor: 'hsl(148, 100%, 26%)',
              },
            }}
            variant='contained'
            onClick={() => handleButtonClick('Yes')}
          >
            Yes
          </Button>
          <Button
            color='error'
            variant='contained'
            onClick={() => handleButtonClick('No')}
          >
            No
          </Button>
        </Stack>

        <Typography variant='body1' sx={{ cursor: 'pointer' }}>
          {login ? (
            <CopyLink userId={userId} />
          ) : (
            <Link to='/'>
              <Box sx={{ color: 'black' }}>Click here to get your link</Box>
            </Link>
          )}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Main;
