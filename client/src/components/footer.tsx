import {ActionIcon, ActionIconGroup, Flex, Grid, Paper, rem, Text} from "@mantine/core";
import classes from "../styles/components/globalStyles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
	return (
		<Paper className={classes.footer}>
			<Grid>
				<Grid.Col span={{base: 12, sm: 6, md: 4}}>
					<Text>The Cube ©2022</Text>
					<Text mt={'sm'} size={'sm'}>Portfolio Project Created By</Text>
					<Text mt={'sm'} size={'sm'}>Jaylen Kofi Appiah</Text>
					<Flex justify={'flex-start'} w={'30%'} mt={'lg'}>
						<ActionIcon className={classes.footerIcons}>
							<FontAwesomeIcon icon={faLinkedin} size={'2xl'}/>
						</ActionIcon>
						<ActionIcon className={classes.footerIcons}>
							<FontAwesomeIcon icon={faGithub} size={'2xl'} />
						</ActionIcon>
					</Flex>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}