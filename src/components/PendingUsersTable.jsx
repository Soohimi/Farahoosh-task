import { useState } from 'react';
import { Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import ReorderIcon from '@mui/icons-material/Reorder';
import FilterListIcon from '@mui/icons-material/FilterList';
import StatusChip from './StatusChip';
import TableToolbar from './TableToolbar';
import Pagination from './Pagination';

const PendingUsersTable = ({ users }) => {
  const [openModal, setOpenModal] = useState(null);
  const [selectedHeaderAction, setSelectedHeaderAction] = useState(null);

  const handleOpen = (label) => {
    setOpenModal(label);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const headerActions = [
    { name: 'filter', label: 'فیلتر', icon: <FilterListIcon sx={{ fontSize: 18 }} /> },
    { name: 'reorder', label: 'ترتیب', icon: <ReorderIcon sx={{ fontSize: 18 }} /> },
    { name: 'export', label: 'خروجی', icon: <OutboxOutlinedIcon sx={{ fontSize: 18 }} /> },
    { name: 'import', label: 'ورودی', icon: <MoveToInboxOutlinedIcon sx={{ fontSize: 18 }} /> },
    { name: 'refresh', label: 'بروزرسانی', icon: <CachedIcon sx={{ fontSize: 18 }} /> },
    { name: 'download', label: 'دانلود', icon: <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} /> },
  ];

  const handleHeaderActionClick = (action) => {
    setSelectedHeaderAction(action.name);
    console.log('اکشن هدر انتخاب شده:', action.label, '| کد:', action.name);
  };

  const columns = [
    { 
      field: 'rowNumber', 
      headerName: 'ردیف', 
      width: 60,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
    },
    { 
      field: 'name', 
      headerName: 'نام کاربری', 
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'userType', 
      headerName: 'مشخصات کاربر', 
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'role', 
      headerName: 'نوع کاربر', 
      flex: 1,
      minWidth: 80,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'identity', 
      headerName: 'هویت', 
      flex: 1,
      minWidth: 70,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'nationalId', 
      headerName: 'شناسه / کدملی', 
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'registrationType', 
      headerName: 'نحوه ثبت‌نام', 
      flex: 1,
      minWidth: 90,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'email', 
      headerName: 'ایمیل', 
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
    },
    { 
      field: 'phone', 
      headerName: 'تلفن همراه', 
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Box sx={{ direction: 'ltr' }}>{params.value}</Box>
      ),
    },
    { 
      field: 'confirmStatus', 
      headerName: 'وضعیت تأیید', 
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => <StatusChip type={params.value} />,
    },
    { 
      field: 'status', 
      headerName: 'وضعیت', 
      flex: 1,
      minWidth: 80,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => <StatusChip type={params.value} />,
    },
  ];

  const rows = users.map((user, index) => ({
    ...user,
    rowNumber: index + 1,
  }));

  return (
    <>
      <Box sx={{ borderRadius: '8px', overflow: 'hidden', mb: 2, border: '1px solid #eee' }}>
        <Box
          sx={{
            backgroundColor: '#07657f',
            color: '#fff',
            py: 0.8,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            direction: 'rtl',
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            در انتظار تعیین وضعیت کاربری
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
            {headerActions.map((action) => (
              <IconButton
                key={action.name}
                size="small"
                onClick={() => handleHeaderActionClick(action)}
                sx={{
                  color: selectedHeaderAction === action.name ? '#ffd700' : '#fff',
                  p: 0.3,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {action.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        <TableToolbar totalRecords={198} />

        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          disableColumnMenu
          hideFooter
          rowHeight={36}
          columnHeaderHeight={40}
          autoHeight
          sx={{
            border: 'none',
            direction: 'rtl',
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#fff',
              borderBottom: '1px solid #eee',
            },
            '& .MuiDataGrid-columnHeader': {
              fontWeight: 700,
              fontSize: 11,
              color: '#333',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 700,
            },
            '& .MuiDataGrid-cell': {
              fontSize: 10,
              color: '#555',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '& .MuiDataGrid-row': {
              '&:nth-of-type(even)': {
                backgroundColor: '#fafafa',
              },
              '&:hover': {
                backgroundColor: '#f8f9fa',
              },
            },
            '& .MuiDataGrid-virtualScroller': {
              overflow: 'auto',
            },
          }}
        />
      </Box>

      <Pagination />

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
          direction: 'rtl',
        }}
      >
        <Button
          variant="text"
          startIcon={<SettingsOutlinedIcon sx={{ fontSize: 16 }} />}
          onClick={() => handleOpen('تعیین وضعیت کاربری')}
          sx={{ 
            color: '#07657f', 
            fontSize: 11,
            fontWeight: 400,
            px: 1.5,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
            '& .MuiButton-startIcon': {
              marginLeft: 0.5,
              marginRight: 0,
            },
          }}
        >
          تعیین وضعیت کاربری
        </Button>
        <Box sx={{ width: '1px', height: '16px', backgroundColor: '#ccc', mx: 1 }} />
        <Button
          variant="text"
          startIcon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}
          onClick={() => handleOpen('اطلاعات بیشتر')}
          sx={{ 
            color: '#40bddb', 
            fontSize: 11,
            fontWeight: 400,
            px: 1.5,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
            '& .MuiButton-startIcon': {
              marginLeft: 0.5,
              marginRight: 0,
            },
          }}
        >
          اطلاعات بیشتر
        </Button>
      </Box>

      <Dialog
        open={openModal !== null}
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
    </>
  );
};

export default PendingUsersTable;
