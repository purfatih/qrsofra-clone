import {
  Typography,
  Container,
  Stack,
  Button,
  ButtonBase,
  TextField,
  Box,
  Divider,
  InputAdornment,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InstagramIcon from '@mui/icons-material/Instagram';
function CreateRestaurant() {
  return (
    <Box
      sx={{
        backgroundColor: '#F4F6F8',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '-160%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '200vh',
          width: '300vh',
          background:
            'linear-gradient(rgb(75, 123, 229) 0%, rgb(62, 108, 209) 100%)',
          borderRadius: '100%',
          zIndex: 0,
        }}
      ></Box>
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          padding: '24px',
          bgcolor: 'white',
          width: '600px',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
        }}
      >
        <Stack sx={{ gap: '16px' }}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: 'Nunito Sans',
              }}
            >
              Yeni Restoran
            </Typography>
            <Typography variant="body2">Yeni bir restoran oluşturun</Typography>
            <Divider
              sx={{
                mx: '-24px',
                height: '1px',
                backgroundColor: '#E5E7EB',
              }}
            />
          </Stack>
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <ButtonBase
              component={Button}
              variant="outlined"
              color="info"
              sx={{
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'Nunito Sans',
                borderRadius: '100px',
                width: '126px',
                height: '126px',
                padding: '16px',
                backgroundColor: '#919eab14',
              }}
            >
              <Stack
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PhotoCameraIcon sx={{ width: '24px', height: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '600',
                    fontFamily: 'Nunito Sans',
                  }}
                >
                  Fotoğraf Yükle
                </Typography>
              </Stack>
            </ButtonBase>
            <Typography
              variant="body2"
              sx={{
                color: '#637381',
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: 'Nunito Sans',
              }}
            >
              Restoran logosunun dosya boyutu maksimum 10MB olmalıdır.
            </Typography>
          </Stack>
          <TextField
            name="restaurantName"
            label="Restoran Adı"
            variant="outlined"
            sx={{
              '& .MuiInputLabel-root': {
                fontWeight: '600',
                fontFamily: 'Nunito Sans',
                color: '#637381',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& .MuiInputBase-input': {
                  borderRadius: '8px',
                },
              },
            }}
          />
          <TextField
            multiline
            minRows={4}
            name="restaurantDescription"
            placeholder="Misafirlerinize gösterilecek olan karşılama mesajını giriniz. Boş bırakabilir, daha sonrasında bu alanı düzenleyebilirsiniz."
            sx={{
              '& textarea::placeholder': {
                color: '#637381',
                opacity: 1,
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: '#637381',
              fontSize: '12px',
              fontWeight: '400',
              fontFamily: 'Nunito Sans',
            }}
          >
            Açıklama maksimum 200 karakter olmalıdır.
          </Typography>
          <TextField
            name="restaurantType"
            label="Instagram Kullanıcı Adı"
            placeholder="Başında '@' işareti olmadan giriniz (Örn. restoran_adi)"
            variant="outlined"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon sx={{ color: '#637381' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& .MuiInputBase-input': {
                  borderRadius: '8px',
                },
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: '#637381',
              fontSize: '12px',
              fontWeight: '400',
              fontFamily: 'Nunito Sans',
            }}
          >
            Sosyal medya hesabınızı misafirlerinize göstermek isterseniz.
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#1C252E',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '1.5',
              fontFamily: 'Nunito Sans',
              width: '100%',
              textTransform: 'none',
              marginTop: '24px',
              height: '36px',
            }}
          >
            Restoran Oluştur
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CreateRestaurant;
