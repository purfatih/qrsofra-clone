import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import FormInput from '../form-input';
import { useNewCategoryFormik } from '../../formik/components/newcategory-formik';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/Context';
import BreadMenuItems from '../bread-menu-items';
import { GetBranchesApi } from '../../api/branches-api';
import AutocompleteComp from '../autocomplete';

function NewCategory() {
  const { branches, setBranches, restaurantId } = useGlobalContext();
  useEffect(() => {
    const fetchBranches = async () => {
      if (restaurantId) {
        const data = await GetBranchesApi(restaurantId);
        setBranches(data);
      }
    };
    fetchBranches();
  }, [restaurantId]);
  const newCategoryFormik = useNewCategoryFormik();
  const menuItems = [
    {
      title: 'Anasayfa',
      path: '/dashboard/home',
    },
    {
      title: 'Kategoriler',
      path: '/dashboard/categories/list',
    },
    {
      title: 'Yeni Kategori Oluştur',
      path: '/dashboard/categories/new',
    },
  ];

  return (
    <Container sx={{ padding: '40px' }}>
      <Stack sx={{ gap: '16px', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontSize: '24px',
            fontFamily: 'Nunito Sans',
            fontWeight: 700,
            color: '#1C252E',
          }}
        >
          Yeni Kategori Oluştur
        </Typography>

        <BreadMenuItems menuItems={menuItems} />
      </Stack>
      <Paper
        sx={{
          maxWidth: '880px',
          mx: 'auto',
          borderRadius: '8px',
          padding: '24px',
          mt: '40px',
        }}
        elevation={1}
      >
        <Stack
          sx={{
            height: '80px',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontFamily: 'Nunito Sans',
              fontWeight: '400',
            }}
          >
            Yeni Kategori Oluştur
          </Typography>
          <Typography
            sx={{
              mt: '4px',
              fontSize: '14px',
              fontFamily: 'Nunito Sans',
              fontWeight: '400',
              color: '#637381',
            }}
          >
            Olivetta için yeni bir kategori oluşturun
          </Typography>
        </Stack>
        <Divider
          sx={{
            mx: '-24px',
            height: '1px',
            backgroundColor: '#E5E7EB',
          }}
        />
        <form onSubmit={newCategoryFormik.handleSubmit}>
          <Stack
            sx={{
              pt: '24px',
              height: 'max-content',
              gap: '24px',
            }}
          >
            <FormInput
              label="Kategori Adı"
              name="name"
              value={newCategoryFormik.values.name}
              onChange={newCategoryFormik.handleChange}
              onBlur={newCategoryFormik.handleBlur}
              sx={{
                '& .MuiFormLabel-root': {
                  fontFamily: 'Nunito Sans',
                  fontWeight: '400',
                  color: '#919EAB',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1C252E',
                  fontFamily: 'Nunito Sans',
                  fontWeight: '400',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { color: 'black' },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1C252E',
                    borderWidth: '1px',
                  },
                },
              }}
              error={
                newCategoryFormik.touched.name &&
                Boolean(newCategoryFormik.errors.name)
              }
              helperText={
                newCategoryFormik.touched.name && newCategoryFormik.errors.name
              }
            />

            <AutocompleteComp
              options={branches}
              error={
                newCategoryFormik.touched.branchIds &&
                Boolean(newCategoryFormik.errors.branchIds)
              }
              helperText={
                newCategoryFormik.touched.branchIds &&
                newCategoryFormik.errors.branchIds
              }
              label="Kategorinin Ekleneceği Şubeler"
              getOptionLabel={(branch) => branch.name}
              value={branches.filter((b) =>
                newCategoryFormik.values.branchIds.includes(b._id),
              )}
              onChange={(_, newValue) => {
                newCategoryFormik.setFieldValue(
                  'branchIds',
                  newValue.map((b) => b._id),
                );
              }}
            />
            <Button
              sx={{
                backgroundColor: '#1C252E',
                color: '#ffffff',
                borderRadius: '8px',
                fontFamily: 'Nunito Sans',
                fontWeight: '700',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#1C252E99' },
              }}
              type="submit"
            >
              Kategori Oluştur
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default NewCategory;
