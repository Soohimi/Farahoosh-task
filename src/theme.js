import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn, Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#00897b',
      light: '#4ebaaa',
      dark: '#005b4f',
    },
    secondary: {
      main: '#26a69a',
    },
    success: {
      main: '#4caf50',
      light: '#e8f5e9',
    },
    error: {
      main: '#f62937',
      light: '#ffebee',
    },
    warning: {
      main: '#ff9800',
      light: '#fff3e0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#fafafa',
        },
      },
    },
  },
});

export default theme;

