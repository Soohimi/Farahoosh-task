import { Box, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 50,
        backgroundColor: '#d6e3e9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        position: 'fixed',
        right: 2,
        top: 8,
        bottom: 8,
        zIndex: 100,
        borderRadius: '16px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <IconButton size="small" sx={{ color: '#666' }}>
          <SearchIcon sx={{ fontSize: 22 }} />
        </IconButton>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.3 }}>
          <LinkIcon sx={{ fontSize: 18, color: '#666', transform: 'rotate(45deg)' }} />
          <Typography sx={{ fontSize: 11, color: '#000', writingMode: 'vertical-lr', fontWeight: 700 }}>
            زنجیره
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.3 }}>
          <GridViewOutlinedIcon sx={{ fontSize: 18, color: '#666' }} />
          <Typography sx={{ fontSize: 11, color: '#000', writingMode: 'vertical-lr', fontWeight: 700 }}>
            آیتم
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(to bottom, #07657f, #4caf50)',
          borderRadius: '24px',
          p: '2px',
          my: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            py: 2,
            px: 0.8,
            borderRadius: '22px',
            backgroundColor: '#fff',
          }}
        >
          <IconButton size="small" sx={{ color: '#666' }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666' }}>
            <Inventory2OutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666' }}>
            <PeopleOutlineIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666' }}>
            <SupportAgentOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: '#666' }}>
            <CloudOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mt: 'auto', mb: 2 }}>
        <IconButton size="small" sx={{ color: '#666' }}>
          <SmartToyOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: '#666' }}>
          <HeadsetMicOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: '#666' }}>
          <SupportOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: '#666' }}>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: '#666' }}>
          <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
