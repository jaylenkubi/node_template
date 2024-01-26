import {MantineTheme} from "@mantine/core";


export const theme: MantineTheme = {
	fontFamily: 'Inter, sans-serif',
	fontFamilyMonospace: 'JetBrains Mono, monospace',

	headings: {
		fontFamily: 'Inter, sans-serif',
		fontWeight: 500,
		sizes: {
			h1: { fontSize: '2.25rem', lineHeight: '3rem' },
			h2: { fontSize: '1.75rem', lineHeight: '2.5rem' },
			h3: { fontSize: '1.375rem', lineHeight: '2rem' },
			h4: { fontSize: '1.125rem', lineHeight: '1.75rem' },
			h5: { fontSize: '1rem', lineHeight: '1.625rem' },
			h6: { fontSize: '0.875rem', lineHeight: '1.5rem' },
		}
	},

	radius: { xs: '0.25rem', sm: '0.375rem', md: '0.5rem', lg: '0.75rem', xl: '1rem' },

	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem'
	},

	lineHeights: {
		xs: '1.125rem',
		sm: '1.25rem',
		md: '1.375rem',
		lg: '1.5rem',
		xl: '1.625rem'
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

	primaryColor: 'indigo',
	primaryShade: { light: 5, dark: 7 },

	colors: {
		neutral: ['#f2f8fc', '#f2f8fc', '#dadfe3', '#c2c6ca', '#a9aeb0', '#919597', '#797c7e', '#616365', '#494a4c', '#303232', '#181919'],
	}
}