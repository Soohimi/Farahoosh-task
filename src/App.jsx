import { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import FilterSection from './components/FilterSection';
import UsersTable from './components/UsersTable';
import PendingUsersTable from './components/PendingUsersTable';
import InfoBar from './components/InfoBar';
import { usersData, pendingUsersData } from './data/users';

function App() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        direction: 'rtl',
        overflow: 'hidden',
      }}
    >
      <Sidebar />

      <Box
        sx={{
          mr: '48px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 2,
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              p: 2,
              minHeight: 'calc(100vh - 150px)',
            }}
          >
            <Breadcrumb />
            <FilterSection value={filter} onChange={handleFilterChange} />
            <UsersTable users={usersData} />
            <PendingUsersTable users={pendingUsersData} />
          </Box>
        </Box>

        <InfoBar />
      </Box>
    </Box>
  );
}

export default App;
