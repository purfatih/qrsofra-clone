import { Box, ButtonBase, Paper, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';
function DashboardPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        paddingTop: '100px',
        gap: '24px',
        backgroundColor: '#fcfbfa',
      }}
    >
      {/*  <Paper
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: '300px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Avatar sx={{ width: '100px', height: '100px' }}>avatar</Avatar>
          <Typography sx={{ textAlign: 'center' }}>restoran adı</Typography>
        </Stack>
      </Paper> */}
      <Paper
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: '300px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
        }}
      >
        <Stack
          component={ButtonBase}
          onClick={() => {
            navigate('/dashboard/create-restaurant');
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <AddIcon sx={{ width: '32px', height: '32px', color: '#C4CDD5' }} />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#454f5b',
              fontFamily: 'Nunito Sans',
            }}
          >
            Restoran Oluştur
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default DashboardPage;
