import { useContext, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ROUTE_PATHS } from '@app/constants';
import { AuthContext } from '@app/context';

type FormData = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

const Login = () => {
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
  const navigate = useNavigate();

  const { login, isAuth } = useContext(AuthContext);

  const onSubmit = async (data: FormData) => {
    await login(data.email, data.password);

    console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_PATHS.ROOT); // TODO: сделать на уровне роутера?
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
          Login
        </button>
      </div>
      <div>
        <RouterLink to={ROUTE_PATHS.REGISTRATION}>Sing up!</RouterLink>
      </div>
    </form>
  );
};

export { Login };
