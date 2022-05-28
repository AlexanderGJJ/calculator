import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

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
    control,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const { login } = useContext(AuthContext);

  const onSubmit = async (data: unknown) => {
    const result = await login('email', 'password');

    console.log(result);

    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Segment>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Input
                  {...field}
                  error={
                    !!errors.email && {
                      content: errors.email.message,
                    }
                  }
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  ref={null}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Form.Input
                  {...field}
                  error={
                    !!errors.password && {
                      content: errors.password.message,
                    }
                  }
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  ref={null}
                />
              )}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <RouterLink to="/registration">Sign Up</RouterLink>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export { Login };
