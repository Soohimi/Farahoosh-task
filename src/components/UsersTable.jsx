import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import ReorderIcon from '@mui/icons-material/Reorder';
import FilterListIcon from '@mui/icons-material/FilterList';
import StatusChip from './StatusChip';
import TableToolbar from './TableToolbar';
import ActionButtons from './ActionButtons';
import Pagination from './Pagination';

const UsersTable = ({ users }) => {
  const [selectedAction, setSelectedAction] = useState(null);

  const headerActions = [
    { name: 'filter', label: 'فیلتر', icon: <FilterListIcon sx={{ fontSize: 18 }} /> },
    { name: 'reorder', label: 'ترتیب', icon: <ReorderIcon sx={{ fontSize: 18 }} /> },
    { name: 'export', label: 'خروجی', icon: <OutboxOutlinedIcon sx={{ fontSize: 18 }} /> },
    { name: 'import', label: 'ورودی', icon: <MoveToInboxOutlinedIcon sx={{ fontSize: 18 }} /> },
    { name: 'refresh', label: 'بروزرسانی', icon: <CachedIcon sx={{ fontSize: 18 }} /> },
    { name: 'download', label: 'دانلود', icon: <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} /> },
  ];

  const handleActionClick = (action) => {
    setSelectedAction(action.name);
    console.log('اکشن انتخاب شده:', action.label, '| کد:', action.name);
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
      minWidth: 120,
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
            اطلاعات کاربران
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
            {headerActions.map((action) => (
              <IconButton
                key={action.name}
                size="small"
                onClick={() => handleActionClick(action)}
                sx={{
                  color: selectedAction === action.name ? '#ffd700' : '#fff',
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

      <ActionButtons />
    </>
  );
};

export default UsersTable;
