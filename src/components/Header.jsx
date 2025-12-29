import {
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '1px solid #e8e8e8',
        height: 50,
        mx: 2,
        mt: 1,
        borderRadius: '16px',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between', 
          px: 2, 
          minHeight: '50px !important',
          height: 50,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ width: 2, height: 24, backgroundColor: '#07657f', borderRadius: 1 }} />
          
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              backgroundColor: '#ebf5f6',
              borderRadius: '20px',
              px: 1.5,
              py: 0.5,
              cursor: 'pointer',
            }}
          >
            <SettingsOutlinedIcon sx={{ color: '#07657f', fontSize: 18 }} />
            <Typography sx={{ color: '#07657f', fontWeight: 500, fontSize: 13 }}>
              کسب و کار فعال
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: '#07657f', fontSize: 20 }} />
          </Box>
          
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#07657f',
              borderRadius: '20px',
              px: 2.5,
              fontSize: 13,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#065670', boxShadow: 'none' },
            }}
          >
            اطلاعات کاربران
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#2d2d2d',
              borderRadius: '20px',
              px: 0.5,
              py: 0.4,
              width: 52,
              height: 26,
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: '#fff',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 20,
                height: 20,
                color: '#888',
                fontSize: 12,
              }}
            >
              🌙
            </Box>
          </Box>

          <Box sx={{ fontSize: 24, lineHeight: 1 }}>
            🇮🇷
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
