import { Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = () => {
  const pages = [1, '...', 10, 11, 12, 13, 14, 15, 16, '...', 27];
  const currentPage = 11;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
        direction: 'ltr',
      }}
    >
      <Box
        sx={{
          minWidth: 26,
          height: 26,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          cursor: 'pointer',
          border: '1px solid #e0e0e0',
          color: '#666',
          transition: 'all 0.15s',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#bdbdbd',
          },
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: 18 }} />
      </Box>
      
      {pages.map((page, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 26,
            height: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            cursor: page !== '...' ? 'pointer' : 'default',
            backgroundColor: page === currentPage ? '#07657f' : 'transparent',
            color: page === currentPage ? '#fff' : '#666',
            border: page !== '...' && page !== currentPage ? '1px solid #e0e0e0' : 'none',
            fontSize: 12,
            fontWeight: page === currentPage ? 500 : 400,
            transition: 'all 0.15s',
            '&:hover': page !== '...' ? {
              backgroundColor: page === currentPage ? '#07657f' : '#f5f5f5',
              borderColor: page !== currentPage ? '#bdbdbd' : undefined,
            } : {},
          }}
        >
          {page}
        </Box>
      ))}
      
      <Box
        sx={{
          minWidth: 26,
          height: 26,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          cursor: 'pointer',
          border: '1px solid #e0e0e0',
          color: '#666',
          transition: 'all 0.15s',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#bdbdbd',
          },
        }}
      >
        <ChevronRightIcon sx={{ fontSize: 18 }} />
      </Box>
    </Box>
  );
};

export default Pagination;

