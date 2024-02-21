import {Anchor, Box, Button, Checkbox, Flex, Group, PasswordInput, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useLogin} from "@ui-services/auth.ts";
import {useEffect, useState} from "react";
import {useAuthToken} from "../shared/hooks/useAuthToken.ts";

const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
const upperCase = /[A-Z]/
const passwordValidation = (value: string) => {
	return specialChar.test(value) && upperCase.test(value) && value.length >= 8
}

export function Login() {
	const [, setAuthToken] = useAuthToken()
	const [rememberMe, setRememberMe] = useState(false)
	const rememberMeLocalStorage = localStorage.getItem('rememberMe')

	useEffect(() => {
		if (rememberMeLocalStorage === 'true') {
			setRememberMe(true)
			form.setFieldValue('email', localStorage.getItem('email') || '')
			form.setFieldValue('password', localStorage.getItem('password') || '')
		}
	}, [rememberMeLocalStorage])
	const form = useForm(
		{
			initialValues: {
				email: '',
				password: ''
			},
			validate: {
				email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
				password: (value) => (passwordValidation(value) ? null : 'Password must contain at least 8 characters, one uppercase letter and one special character')
			}
		}
	)

	const {mutate: login, status} = useLogin({
		mutation: {
			onSuccess: (data) => {
				if (rememberMe) {
					localStorage.setItem('rememberMe', 'true')
					localStorage.setItem('email', form.values.email)
					localStorage.setItem('password', form.values.password)
				}
			},
			onError: (error) => {
				console.log(error)
			}
		}
	})

	const formSubmit = (values: any) => {
		try {
			login({data: values})
		}catch (e) {
		}
	}
	return (
		<form onSubmit={form.onSubmit((values) => formSubmit(values))}>
			<Box w={'80%'} m={'auto'}>
				<Text mt={'xl'} fz={'30px'}>Login</Text>
				<Text mt={'xl'}>Email</Text>
				<TextInput size={'md'} {...form.getInputProps('email')}/>
				<Text mt={'xl'}>Password</Text>
				<PasswordInput size={'md'} {...form.getInputProps('password')}/>
				<Flex justify={'space-between'} mt={'xl'}>
					<Checkbox label="Remember me"/>
					<Anchor c={'black'} href="#" size="sm">Forgot password?</Anchor>
				</Flex>
				<Button my={'xl'} variant={'filled'} size={'md'} fullWidth type={'submit'} loading={status === 'pending'}>Login</Button>
				<Button my={'xl'} variant={'outline'} size={'md'} fullWidth loading={status === 'pending'}>Sign up</Button>
			</Box>
		</form>
	)
}