import { useState } from 'react';
import { 
  Box, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'نام باید حداقل ۲ کاراکتر باشد')
    .max(50, 'نام نباید بیشتر از ۵۰ کاراکتر باشد')
    .required('نام الزامی است'),
  lastName: Yup.string()
    .min(2, 'نام خانوادگی باید حداقل ۲ کاراکتر باشد')
    .max(50, 'نام خانوادگی نباید بیشتر از ۵۰ کاراکتر باشد')
    .required('نام خانوادگی الزامی است'),
  age: Yup.number()
    .min(18, 'سن باید حداقل ۱۸ سال باشد')
    .max(100, 'سن نباید بیشتر از ۱۰۰ سال باشد')
    .required('سن الزامی است'),
  nationalId: Yup.string()
    .matches(/^[0-9]{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required('کد ملی الزامی است'),
  phone: Yup.string()
    .matches(/^09[0-9]{9}$/, 'شماره تلفن باید با 09 شروع شود و ۱۱ رقم باشد')
    .required('شماره تلفن الزامی است'),
  email: Yup.string()
    .email('ایمیل معتبر نیست')
    .required('ایمیل الزامی است'),
});

const ActionButtons = () => {
  const [openModal, setOpenModal] = useState(null);
  const [isEditModal, setIsEditModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      nationalId: '',
      phone: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('فرم ویرایش ارسال شد:', values);
      alert('اطلاعات با موفقیت ذخیره شد!');
      handleClose();
    },
  });

  const buttons = [
    { label: 'گروه‌های عضو', icon: <GroupOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'نقش‌ها', icon: <AssignmentOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'طرح‌های کاربر', icon: <PaletteOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'بازنشانی رمز', icon: <LockResetOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'سوابق ورود', icon: <LoginOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'تغییر وضعیت تأیید', icon: <SettingsOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'تنظیم درگاه', icon: <SettingsOutlinedIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'تغییر وضعیت', icon: <SyncIcon sx={{ fontSize: 16 }} />, color: '#666' },
    { label: 'اطلاعات بیشتر', icon: <InfoOutlinedIcon sx={{ fontSize: 16 }} />, color: '#40bddb' },
    { label: 'ویرایش', icon: <EditOutlinedIcon sx={{ fontSize: 16 }} />, color: '#87aef2' },
    { label: 'حذف', icon: <DeleteOutlineIcon sx={{ fontSize: 16 }} />, color: '#f62937' },
  ];

  const handleOpen = (label) => {
    if (label === 'ویرایش') {
      setIsEditModal(true);
      formik.resetForm();
    } else {
      setIsEditModal(false);
    }
    setOpenModal(label);
  };

  const handleClose = () => {
    setOpenModal(null);
    setIsEditModal(false);
    formik.resetForm();
  };

  const textFieldSx = {
    direction: 'rtl',
    '& .MuiOutlinedInput-root': { 
      borderRadius: '12px',
      height: 56,
    },
    '& .MuiOutlinedInput-input': {
      textAlign: 'right',
      paddingRight: '14px',
      fontSize: 14,
    },
    '& .MuiInputLabel-root': { 
      fontSize: 13,
      left: 'auto',
      right: 28,
      transformOrigin: 'top right',
      '&.MuiInputLabel-shrink': {
        right: 18,
        transformOrigin: 'top right',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      textAlign: 'right',
    },
    '& legend': {
      textAlign: 'right',
      marginRight: -2,
    },
    '& .MuiFormHelperText-root': {
      textAlign: 'right',
      marginRight: 0,
    },
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 0,
          py: 1.5,
          px: 3,
          backgroundColor: '#f1f4f8',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          mt: 2,
          mb: 6,
          direction: 'rtl',
        }}
      >
        {buttons.map((button, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="text"
              startIcon={button.icon}
              size="small"
              onClick={() => handleOpen(button.label)}
              sx={{
                color: button.color,
                fontSize: 11,
                fontWeight: 400,
                px: 1.5,
                py: 0.5,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)',
                },
                '& .MuiButton-startIcon': {
                  marginLeft: 0.5,
                  marginRight: 0,
                },
              }}
            >
              {button.label}
            </Button>
            {index < buttons.length - 1 && (
              <Box
                sx={{
                  width: '1px',
                  height: '16px',
                  backgroundColor: '#ccc',
                  mx: 1,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      <Dialog
        open={openModal !== null && !isEditModal}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            minWidth: 300,
            direction: 'rtl',
          },
        }}
      >
        <DialogTitle sx={{ fontSize: 16, fontWeight: 600, color: '#07657f' }}>
          {openModal}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: 14, color: '#555' }}>
            این بخش مربوط به "{openModal}" است.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              backgroundColor: '#07657f',
              borderRadius: '8px',
              fontSize: 12,
              '&:hover': { backgroundColor: '#065670' },
            }}
          >
            بستن
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isEditModal}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '12px',
            direction: 'rtl',
          },
        }}
      >
        <DialogTitle sx={{ fontSize: 18, fontWeight: 600, color: '#07657f', borderBottom: '1px solid #eee' }}>
          ویرایش اطلاعات کاربر
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent sx={{ pt: 1.5, pb: 0, px: 2 }}>
            <Grid container spacing={1.5}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="نام"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="نام خانوادگی"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="age"
                  name="age"
                  label="سن"
                  type="number"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="nationalId"
                  name="nationalId"
                  label="کد ملی"
                  value={formik.values.nationalId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nationalId && Boolean(formik.errors.nationalId)}
                  helperText={formik.touched.nationalId && formik.errors.nationalId}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="شماره تلفن"
                  placeholder="09123456789"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="ایمیل"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={textFieldSx}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 2, pb: 1.5, pt: 1.5, gap: 1, justifyContent: 'flex-start' }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: '8px',
                fontSize: 12,
                borderColor: '#ccc',
                color: '#666',
                '&:hover': { borderColor: '#999' },
              }}
            >
              انصراف
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#07657f',
                borderRadius: '8px',
                fontSize: 12,
                '&:hover': { backgroundColor: '#065670' },
              }}
            >
              ذخیره
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ActionButtons;
