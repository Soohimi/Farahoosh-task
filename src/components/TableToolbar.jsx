import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const TableToolbar = ({ totalRecords }) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          px: 1.5,
          py: 1,
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #eee',
          direction: 'rtl',
        }}
      >
        <Typography sx={{ fontSize: 12, color: '#666', pl: 2 }}>
          تعداد کل رکوردها: {totalRecords}
        </Typography>

        <TextField
          size="small"
          placeholder="جستجو در نام خانوادگی/عنوان شرکت، کد ملی/شناسه ملی"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 18, color: '#999' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <FilterAltOutlinedIcon sx={{ fontSize: 16, color: '#999' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 320,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#fff',
              fontSize: 11,
              height: 32,
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#bdbdbd',
              },
            },
            '& .MuiOutlinedInput-input': {
              py: 0.75,
              '&::placeholder': {
                fontSize: 11,
                color: '#999',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TableToolbar;
