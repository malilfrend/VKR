import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@mui/joy/Button';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import s from './Login.module.scss';

interface IFormData {
  login: string;
  password: string;
}

const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const Login = () => {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    trigger,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });
  useEffect(() => {
    register('login');
    register('password');
    return () => {
      unregister('login');
      unregister('password');
    };
  }, []);
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <Controller
          name="login"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl>
              <FormLabel className={s.label}>Логин</FormLabel>
              <Input
                type="login"
                placeholder="Введите логин"
                className={s.input}
                onChange={onChange}
                value={value}
                error={Boolean(errors.login?.message)}
              />
            </FormControl>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl>
              <FormLabel className={s.label}>Пароль</FormLabel>
              <Input
                type="password"
                placeholder="Введите пароль"
                className={s.input}
                onChange={onChange}
                value={value}
                error={Boolean(errors.password?.message)}
              />
            </FormControl>
          )}
        />
        <Button variant="soft" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};
