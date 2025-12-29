import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const FilterSection = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        py: 1,
        px: 1,
        mb: 2,
        backgroundColor: '#f1f4f8',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          direction: 'rtl',
          backgroundColor: '#fff',
          borderRadius: '6px',
          px: 2,
          py: 1,
        }}
      >
        <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#333' }}>
          نمایش انتخابی:
        </Typography>

        <RadioGroup
          row
          value={value}
          onChange={onChange}
          sx={{ display: 'flex', gap: 3, flexDirection: 'row-reverse' }}
        >
          <FormControlLabel
            value="all"
            control={
              <Radio 
                size="small" 
                sx={{ 
                  p: 0.5,
                  '&.Mui-checked': { color: '#07657f' },
                }} 
              />
            }
            label="همه"
            sx={{ 
              m: 0,
              flexDirection: 'row-reverse',
              '& .MuiFormControlLabel-label': { 
                fontSize: 13, 
                color: '#555',
                ml: 0.5,
                mr: 0,
              } 
            }}
          />
          <FormControlLabel
            value="pending"
            control={
              <Radio 
                size="small" 
                sx={{ 
                  p: 0.5,
                  '&.Mui-checked': { color: '#07657f' },
                }} 
              />
            }
            label="در انتظار تأیید"
            sx={{ 
              m: 0,
              flexDirection: 'row-reverse',
              '& .MuiFormControlLabel-label': { 
                fontSize: 13, 
                color: '#555',
                ml: 0.5,
                mr: 0,
              } 
            }}
          />
          <FormControlLabel
            value="confirmed"
            control={
              <Radio 
                size="small" 
                sx={{ 
                  p: 0.5,
                  '&.Mui-checked': { color: '#07657f' },
                }} 
              />
            }
            label="تأییدشده"
            sx={{ 
              m: 0,
              flexDirection: 'row-reverse',
              '& .MuiFormControlLabel-label': { 
                fontSize: 13, 
                color: '#555',
                ml: 0.5,
                mr: 0,
              } 
            }}
          />
          <FormControlLabel
            value="rejected"
            control={
              <Radio 
                size="small" 
                sx={{ 
                  p: 0.5,
                  '&.Mui-checked': { color: '#07657f' },
                }} 
              />
            }
            label="ردشده"
            sx={{ 
              m: 0,
              flexDirection: 'row-reverse',
              '& .MuiFormControlLabel-label': { 
                fontSize: 13, 
                color: '#555',
                ml: 0.5,
                mr: 0,
              } 
            }}
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FilterSection;
