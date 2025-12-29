import { Box, Typography } from '@mui/material';

const Breadcrumb = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        mb: 2,
        direction: 'rtl',
      }}
    >
      <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#07657f' }}>
        مدیریت کاربران
      </Typography>
      <Typography sx={{ fontSize: 13, color: '#333' }}>
        ←
      </Typography>
      <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#333' }}>
        اطلاعات کاربران
      </Typography>
    </Box>
  );
};

export default Breadcrumb;
