import { Box } from '@mui/material';

const StatusChip = ({ type }) => {
  const getChipStyles = () => {
    switch (type) {
      case 'active':
        return {
          backgroundColor: '#60ce21',
          color: '#fff',
          border: 'none',
          text: 'فعال',
        };
      case 'inactive':
        return {
          backgroundColor: '#f62937',
          color: '#fff',
          border: 'none',
          text: 'غیرفعال',
        };
      case 'confirmed':
        return {
          backgroundColor: '#60ce21',
          color: '#fff',
          border: 'none',
          text: 'تأییدشده',
        };
      case 'rejected':
        return {
          backgroundColor: '#f62937',
          color: '#fff',
          border: 'none',
          text: 'رد شده',
        };
      case 'pending':
        return {
          backgroundColor: '#60ce21',
          color: '#fff',
          border: 'none',
          text: 'تأییدشده',
        };
      case 'awaitingConfirm':
        return {
          backgroundColor: '#e9b411',
          color: '#fff',
          border: 'none',
          text: 'در انتظار تأیید ثبت‌نام',
        };
      default:
        return {
          backgroundColor: '#f5f5f5',
          color: '#616161',
          border: '1px solid #e0e0e0',
          text: type,
        };
    }
  };

  const styles = getChipStyles();

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        border: styles.border,
        borderRadius: '16px',
        px: 1.5,
        py: 0.3,
        fontSize: 11,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        lineHeight: 1.4,
      }}
    >
      {styles.text}
    </Box>
  );
};

export default StatusChip;
