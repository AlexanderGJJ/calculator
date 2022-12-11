import React, { useContext, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTE_PATHS } from '@app/constants';

import { AuthContext } from '@app/context';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

type FormData = {
  email: string;
  password: string;
};

const Registration = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const { registration, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    await registration(data.email, data.password);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_PATHS.ROOT);
    }
  }, [isAuth]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="text"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.email && <div className="text-red-400">{errors.email.message}</div>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.password && <div className="text-red-400">{errors.password.message}</div>}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up!
        </button>
      </div>
      <div>
        <RouterLink to={ROUTE_PATHS.LOGIN}>Login!</RouterLink>
      </div>
    </form>
  );
};

export { Registration };
