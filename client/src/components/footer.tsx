import { ActionIcon, Box, Button, Flex, Grid, Group, Paper, Stack, Text, TextInput, Title } from '@mantine/core';
import classes from '../styles/components/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
	return (
		<Paper className={classes.footer}>
			<div className={classes.footerContent}>
				<Grid>
					<Grid.Col span={{ base: 12, xs: 6 }}>
						<Grid>
							<Grid.Col>
								<Stack gap="xl">
									<Title order={5} c={'neutral.1'}>
										Sign up For The Lastest News & Release
									</Title>
									<Text c={'neutral.2'} fz={'xs'} maw={440}>
										{' '}
										Sign up to The Cube newsletter for the newest releases, curated collections and product recommendations tailored to you.
									</Text>
								</Stack>
							</Grid.Col>
							<Grid.Col>
								<Group mb={'xl'}>
									<div className={classes.form__group}>
										<input type="input" className={classes.form__field} placeholder="What's your email?" required={false} />
										<label htmlFor="name" className={classes.form__label}>
											What's your email?
										</label>
									</div>
									<Button variant={'dark'}>Submit</Button>
								</Group>
							</Grid.Col>
						</Grid>
					</Grid.Col>
					<Grid.Col span={{ base: 12, xs: 6}}>
						<Grid>
							<Grid.Col span={6}>
								<Stack gap="xl">
									<Title order={5}>Brands</Title>
									<Text fz={'xs'}>Air Jordan</Text>
									<Text fz={'xs'}>Nike</Text>
									<Text fz={'xs'}>New Balance</Text>
									<Text fz={'xs'}>Yeezy</Text>
									<Text fz={'xs'}>Adidas</Text>
								</Stack>
							</Grid.Col>
							<Grid.Col span={6}>
								<Stack gap="xl">
									<Title order={5}>Contact Us</Title>
									<Group>
										<Text fz={'xs'}>Name:</Text>
										<Text fz={'xs'}>Jaylen Kofi Appiah-Kubi</Text>
									</Group>
									<Group>
										<Text fz={'xs'}>Email:</Text>
										<Text fz={'xs'}>JaylenKubi@gmail.com</Text>
									</Group>
									<Flex justify={'flex-start'} w={'30%'} mt={'lg'}>
										<ActionIcon className={classes.footerIcons}>
											<FontAwesomeIcon icon={faLinkedin} size={'2xl'}/>
										</ActionIcon>
										<ActionIcon className={classes.footerIcons}>
											<FontAwesomeIcon icon={faGithub} size={'2xl'} />
										</ActionIcon>
									</Flex>
								</Stack>
							</Grid.Col>
						</Grid>
					</Grid.Col>
				</Grid>
			</div>
		</Paper>
	);
}
