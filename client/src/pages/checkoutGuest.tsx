import { Button, Checkbox, Grid, Paper, Select, Text, TextInput } from '@mantine/core';
import classes from '../styles/components/shoppingBag.module.scss';
import { useNavigate } from 'react-router-dom';
import { ProductSummaryAccordion } from '../components/productSummary.accordion.tsx';

export function CheckoutGuest() {
	const navigate = useNavigate();
	return (
		<div className={classes.shoppingBagContainer}>
			<Text fz={'xl'} my={'lg'} pl={{ base: 32, sm: 0 }}>
				YOUR BAG SUMMARY
			</Text>
			<Text fz={'sm'} my={'lg'} pl={{ base: 32, sm: 0 }}>
				You are checking out as a guest. <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Log in</span>
			</Text>
			<ProductSummaryAccordion />
			<Paper p={{ base: 32, lg: 40 }} mt={32}>
				<Text fz={'lg'}>DELIVERY ADDRESS</Text>
				<Grid mt={16}>
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Text>First name</Text>
						<TextInput size={'md'} w={'inherit'} />
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Text>Last name</Text>
						<TextInput size={'md'} w={'inherit'} />
					</Grid.Col>
				</Grid>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>Country</Text>
					<Select size={'md'} w={'inherit'} data={['United Kingdom', 'Germany', 'France']} />
				</div>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>House Number / Name</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>Address</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>City</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>Postcode</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
			</Paper>
			<Paper p={{ base: 32, lg: 40 }} mt={32}>
				<div style={{ width: '100%' }}>
					<Text>Email</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
				<div style={{ width: '100%', marginTop: 16 }}>
					<Text>Phone number</Text>
					<TextInput size={'md'} w={'inherit'} />
				</div>
			</Paper>
			<Checkbox pl={{ base: 32, sm: 0 }} mt={32} label="Tick here if you want to hear more from Laced, including the latest news and releases." />
			<Button mt={32} variant={'filled'} fullWidth onClick={() => navigate('/checkout/guest/payment')}>
				Next
			</Button>
		</div>
	);
}
