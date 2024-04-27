import classes from '../styles/components/shoppingBag.module.scss';
import { ProductSummaryAccordion } from '../components/productSummary.accordion.tsx';
import { Paper, Text, Image, Flex, Divider, Checkbox, Box, TextInput, Grid, Button } from '@mantine/core';

export function CheckoutGuestPayment() {
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
				<Text mt={16} fz={'16px'}>
					Jaylen Kofi,10 Brion Place, Poplar, London, E140SP
				</Text>
				<Flex justify={'space-between'} align={'center'}>
					<Image src={'https://www.laced.com/assets/royal_mail-e7a51bbba111ff399fdb1d7c4a5644e6adb407457e8ffd8a572a3096e43fdee8.svg'} w={80} mt={16} />
					<Text fz={'sm'}>Delivery Fee: £9.99</Text>
				</Flex>
			</Paper>
			<Paper p={{ base: 32, lg: 40 }} mt={32}>
				<Text fz={'lg'}>ORDER SUMMARY</Text>
				<Divider mt={16} variant="dashed" />
				<Flex justify={'space-between'} mt={16} align={'center'}>
					<Text fz={'sm'}>Items</Text>
					<Text fz={'sm'}>£400.00</Text>
				</Flex>
				<Divider mt={16} variant="dashed" />
				<Flex justify={'space-between'} mt={16} align={'center'}>
					<Text fz={'sm'}>Delivery</Text>
					<Text fz={'sm'}>£9.99</Text>
				</Flex>
				<Divider mt={16} variant="dashed" />
				<Flex justify={'space-between'} mt={16} align={'center'}>
					<Text fz={'sm'}>Total</Text>
					<Text fz={'sm'}>£409.99</Text>
				</Flex>
			</Paper>
			<Paper p={{ base: 32, lg: 40 }} mt={32}>
				<Text fz={'lg'}>PAYMENT DETAILS</Text>
				<Box mt={16} bg={'neutral.1'} p={'lg'}>
					<Checkbox defaultChecked label={'Credit or debit card'}/>
				</Box>
				<Divider mt={32} />
				<Text fz={'sm'} mt={16}>Cardholder Name</Text>
				<TextInput size={'md'} w={'inherit'} />
				<Text fz={'sm'} mt={16}>Card Number</Text>
				<TextInput size={'md'} placeholder={'xxxxx xxxx xxxx xxxx'} w={'inherit'} />
				<Grid mt={16}>
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Text fz={'sm'}>Expiry Date</Text>
						<TextInput size={'md'} placeholder={'MM/YY'} w={'inherit'} />
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Text fz={'sm'}>CVV</Text>
						<TextInput size={'md'} placeholder={'CVV'} w={'inherit'} />
					</Grid.Col>
				</Grid>
			</Paper>
			<Button mt={32} variant={'filled'} fullWidth >
				Place order
			</Button>
		</div>
	);
}
