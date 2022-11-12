import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography
} from '@mui/material';

import Logo from '../../../components/Logo';
import { useLoginMutation } from '../../../store/services/auth';
import { authActions } from '../../../store/slices/authSlice';
import { commonActions } from '../../../store/slices/commonSlice';
import { theme } from '../../../themes';
import { LoginForm } from '../../../types/login';

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginForm) => {
    login(values)
      .unwrap()
      .then((response) => {
        dispatch(authActions.setToken({ token: response.token }));
      })
      .catch((error) =>
        dispatch(commonActions.showToast({ toast: error?.data?.message }))
      );
  };

  return (
    <>
      <Box display="flex" justifyContent="center" mt={2} mb={4}>
        <Logo />
      </Box>
      <Box mb={5}>
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="22px"
          fontWeight="bold"
          mb={1.5}
          color={theme.palette.primary.main}
        >
          Welcome back!
        </Typography>
        <Typography textAlign="center" color={theme.palette.secondary.main}>
          Enter your credentials to continue
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2} mb={1}>
          <TextField
            label="Email"
            inputProps={{
              ...register("email", {
                required: {
                  message: "Email is required",
                  value: true,
                },
              }),
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
          <TextField
            label="Password"
            inputProps={{
              ...register("password", {
                required: {
                  message: "Password is required",
                  value: true,
                },
                minLength: {
                  message: "Password length must be at least 8 characters",
                  value: 8,
                },
              }),
            }}
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
            fullWidth
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link component={RouterLink} to="/auth/forgot-password">
            Forgot password?
          </Link>
        </Box>
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          fullWidth
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
