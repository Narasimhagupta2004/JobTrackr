import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Container
        maxWidth="sm"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          backdropFilter: 'blur(15px)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 3,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          p: 5,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Oops! The page you are looking for doesn’t exist.
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, opacity: 0.9 }}
        >
          It seems you might have taken a wrong turn. Don’t worry, we’ll help you get back.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{
            background:
              'linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)',
            fontWeight: 'bold',
            py: 1.2,
            px: 4,
            boxShadow: '0 4px 15px rgba(229, 46, 113, 0.6)',
            '&:hover': {
              background:
                'linear-gradient(90deg, #e52e71 0%, #ff8a00 100%)',
              boxShadow: '0 6px 20px rgba(255, 138, 0, 0.7)',
            },
          }}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;
