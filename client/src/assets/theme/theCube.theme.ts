import cx from 'clsx';
import {Badge, Button, Checkbox, Container, createTheme, PasswordInput, TextInput} from "@mantine/core";
import classes from '../../styles/components/globalStyles.module.scss';

export const appTheme: any = createTheme({
	fontFamily: 'Inter, sans-serif',
	fontFamilyMonospace: 'JetBrains Mono, monospace',
	autoContrast: true,
	headings: {
		fontFamily: 'Inter, sans-serif',
		sizes: {
			h1: {fontSize: '2.25rem', lineHeight: '3rem'},
			h2: {fontSize: '1.75rem', lineHeight: '2.5rem'},
			h3: {fontSize: '1.375rem', lineHeight: '2rem'},
			h4: {fontSize: '1.125rem', lineHeight: '1.75rem'},
			h5: {fontSize: '1rem', lineHeight: '1.625rem'},
			h6: {fontSize: '0.875rem', lineHeight: '1.5rem'},
		}
	},
	radius: {xs: '0.25rem', sm: '0.375rem', md: '0.5rem', lg: '0.75rem', xl: '1.5rem'},

	fontSizes: {
		xxs: '0.625rem',
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem'
	},

	breakpoints: {
		xs: '31.25rem',
		sm: '48rem',
		md: '62rem',
		lg: '75rem',
		xl: '87.5rem'
	},

	shadows: {
		xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
		sm: '0 3px 6px rgba(0, 0, 0, 0.07)',
		md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
		lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
		xl: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
	},

	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '0.75rem',
		lg: '1rem',
		xl: '1.25rem'
	},

	primaryColor: 'blue',
	primaryShade: {light: 5, dark: 7},
	components: {
		Button: Button.extend({
			classNames: {
				root: classes.button
			}
		}),
		Badge: Badge.extend({
			classNames: {
				root: classes.badge
			}
		}),
		Container: Container.extend({
			classNames: (_, {size}) => ({
				root: cx({[classes.responsiveContainer]: size === 'responsive'}),
			})
		}),
		TextInput: TextInput.extend({
			classNames: {
				input: classes.textInput
			}
		}),
		PasswordInput: PasswordInput.extend({
			classNames: {
				input: classes.textInput
			}
		}),
		Checkbox: Checkbox.extend({
			classNames: {
				input: classes.checkbox
			}
		})
		// Button: {
		// 	styles: ({ radius, colors }) => ({
		// 		label: {
		// 			fontWeight: 'normal'
		// 		},
		// 		root: {
		// 			borderRadius: radius.lg,
		// 			'&:disabled': {
		// 				backgroundColor: colors.neutral[4],
		// 				color: colors.neutral[6]
		// 			}
		// 		},
		//
		// 	}),
		// variants: {
		// 	filled: ({ colors }) => ({
		// 		root: {
		// 			backgroundColor: colors.primary[9],
		// 			color: colors.shades[0],
		// 			'&:hover': {
		// 				backgroundColor: colors.secondary[7]
		// 			}
		// 		}
		// 	}),
		// 	dark: ({ colors }) => ({
		// 		root: {
		// 			backgroundColor: colors.primary[6],
		// 			color: colors.shades[0],
		// 			'&:hover': {
		// 				backgroundColor: colors.primary[7]
		// 			}
		// 		}
		// 	}),
		// 	light: ({ colors }) => ({
		// 		root: {
		// 			backgroundColor: colors.primary[1],
		// 			color: colors.primary[6],
		// 			'&:hover': {
		// 				backgroundColor: colors.primary[2]
		// 			}
		// 		}
		// 	}),
		// 	outline: ({ colors }) => ({
		// 		root: {
		// 			color: colors.secondary[7],
		// 			border: `1px solid ${colors.secondary[7]}`,
		// 			'&:hover': {
		// 				backgroundColor: colors.secondary[0]
		// 			}
		// 		}
		// 	}),
		// 	subtle: ({ colors }) => ({
		// 		root: {
		// 			color: colors.primary[6],
		// 			'&:hover': {
		// 				backgroundColor: colors.primary[0]
		// 			}
		// 		}
		// 	}),
		// 	error: ({ colors }) => ({
		// 		root: {
		// 			backgroundColor: colors.error[7],
		// 			color: colors.shades[0],
		// 			'&:hover': {
		// 				backgroundColor: colors.error[8]
		// 			}
		// 		}
		// 	}),
		// }

	},
	colors: {
		neutral: ['#000000', '#f2f8fc', '#CDD0E2', '#ADB7D7', '#B788D5', '#C4CDE5', '', '', '', '', ''],
	}
})