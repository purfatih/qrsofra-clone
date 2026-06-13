import { useFormik } from 'formik';
import { ProductValidationSchewma } from '../validation/validationSchema';
import type { ProductTypes } from '../../types';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../../context/Context';
import { NewProductsApi } from '../../api/products-api';

export const useNewProductFormik = () => {
  const { restaurantId, setProducts } = useGlobalContext();
  const navigate = useNavigate();
  const newProductFormik = useFormik<ProductTypes>({
    enableReinitialize: true,
    initialValues: {
      name: '',
      branches: [],
      categories: [],
      extraProducts: [],
      restaurantId: restaurantId,
      status: 'ACTIVE',
      description: '',
      price: 0,
      image: '',
      imageFile: null,
    },

    onSubmit: async (values: ProductTypes) => {
      try {
        const response = await NewProductsApi(values);
        navigate('/dashboard/products/list');
        setProducts((prev) => [...prev, response.data.data as ProductTypes]);
        console.log(response);
        return response;
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error message:', error.message);
        } else {
          console.error('Unknown error:', error);
        }
        throw error;
      }
    },
    validationSchema: ProductValidationSchewma,
  });

  return newProductFormik;
};
