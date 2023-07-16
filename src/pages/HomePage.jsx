import { Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Typography
        sx={{
          paddingTop: '100px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
          textShadow: '1px 1px',
          color: 'black',
        }}
        component="h1"
      >
        Keep your contacts in safe
      </Typography>
    </>
  );
};
