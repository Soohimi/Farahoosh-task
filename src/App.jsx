import { useState } from 'react'
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent,
  Stack
} from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <RocketLaunchIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
            
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
              فراهوش
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              React + Material UI آماده‌ست! 🎉
            </Typography>
            
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => setCount((count) => count + 1)}
              >
                کلیک: {count}
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => setCount(0)}
              >
                ریست
              </Button>
            </Stack>
            
            <Typography variant="body2" color="text.secondary">
              فایل <code>src/App.jsx</code> رو ویرایش کن و شروع کن!
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App
