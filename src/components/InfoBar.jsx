import { Box, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const InfoBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '2px solid #9ec8e2',
        py: 1,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        flexShrink: 0,
        mx: 2,
        mb: 2,
        borderRadius: '12px',
        direction: 'rtl',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PersonOutlineIcon sx={{ fontSize: 18, color: '#07657f' }} />
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#000' }}>
          علی متین
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <DiamondOutlinedIcon sx={{ fontSize: 18, color: '#4caf50' }} />
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Typography component="span" sx={{ fontSize: 13, fontWeight: 700, color: '#000' }}>
          طرح صدفی
        </Typography>
        <Typography component="span" sx={{ fontSize: 13, fontWeight: 400, color: '#888', ml: 0.5 }}>
          (۳۶۵روز تا پایان)
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AccessTimeIcon sx={{ fontSize: 18, color: '#4caf50' }} />
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#000', direction: 'ltr' }}>
          09:36:47
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CalendarTodayOutlinedIcon sx={{ fontSize: 18, color: '#07657f' }} />
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#000' }}>
          ۰۲ / مرداد / ۱۴۰۲
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CalendarTodayOutlinedIcon sx={{ fontSize: 18, color: '#07657f' }} />
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#000' }}>
          Jul / 07 / 2023
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoBar;
