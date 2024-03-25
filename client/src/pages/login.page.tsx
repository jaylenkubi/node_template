import { Anchor, Box, Button, Checkbox, Flex, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLogin } from '@ui-services/auth.ts';
import { useEffect, useState } from 'react';
import { useAuthToken } from '../shared/hooks/useAuthToken.ts';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../shared/stores/auth.store.ts';
import classes  from '../styles/components/loginAndRegister.module.scss';

const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const upperCase = /[A-Z]/;
export const passwordValidation = (value: string) => {
	return specialChar.test(value) && upperCase.test(value) && value.length >= 8;
};

export function Login() {
	const [, setAuthToken] = useAuthToken();
	const { validateUser } = useAuthStore();
	const navigate = useNavigate();
	const [rememberMe, setRememberMe] = useState(false);
	const rememberMeLocalStorage = localStorage.getItem('rememberMe');

	useEffect(() => {
		if (rememberMeLocalStorage === 'true') {
			setRememberMe(true);
			form.setFieldValue('email', localStorage.getItem('email') || '');
			form.setFieldValue('password', localStorage.getItem('password') || '');
		}
	}, [rememberMeLocalStorage]);
	const form = useForm({
		initialValues: {
			email: '',
			password: ''
		},
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			password: (value) => (passwordValidation(value) ? null : 'Password must contain at least 8 characters, one uppercase letter and one special character')
		}
	});

	const { mutate: login, status } = useLogin({
		mutation: {
			onSuccess: (data) => {
				const { _id: userId, firstName, lastName, email, type } = data.user;
				setAuthToken(data.tokens.access.token);
				validateUser({ userId, firstName, lastName, email, type, authToken: data.tokens.access.token });
				if (rememberMe) {
					localStorage.setItem('rememberMe', 'true');
					localStorage.setItem('email', form.values.email);
					localStorage.setItem('password', form.values.password);
				}
			},
			onError: (error) => {
				console.log(error);
			}
		}
	});

	const formSubmit = (values: any) => {
		login({ data: values });
	};
	return (
		<form onSubmit={form.onSubmit((values) => formSubmit(values))}>
			<Box className={classes.loginAndRegisterBox} >
				<Text mt={'xl'} fz={'30px'}>
					Login
				</Text>
				<Text mt={'xl'}>Email</Text>
				<TextInput size={'md'} {...form.getInputProps('email')} />
				<Text mt={'xl'}>Password</Text>
				<PasswordInput size={'md'} {...form.getInputProps('password')} />
				<Flex justify={'space-between'} mt={'xl'}>
					<Checkbox label="Remember me" />
					<Anchor c={'black'} href="#" size="sm">
						Forgot password?
					</Anchor>
				</Flex>
				<Button my={'xl'} variant={'filled'} size={'md'} fullWidth type={'submit'} loading={status === 'pending'}>
					Login
				</Button>
				<Button my={'xl'} variant={'outline'} size={'md'} fullWidth loading={status === 'pending'} onClick={() => navigate('/auth/sign-up')}>
					Sign up
				</Button>
			</Box>
		</form>
	);
}
